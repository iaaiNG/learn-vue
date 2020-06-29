import VNode from "./vnode"

export function patch(oldVnode, vnode) {
    oldVnode = new VNode(oldVnode.tagName.toLowerCase(), {}, [], undefined, oldVnode)

    const insertedVnodeQueue = []
    const oldElm = oldVnode.elm
    const parentElm = oldElm.parentNode

    createElm(
        vnode,
        insertedVnodeQueue,
        parentElm,
        oldElm.nextSibling
    )

    // 移除就节点，会触发一下钩子，比如销毁之类，先不看，用个简单得替代先
    // removeVnodes([oldVnode], 0, 0)
    oldElm.remove()

}

function createElm(
    vnode,
    insertedVnodeQueue,
    parentElm,
    refElm
) {
    const children = vnode.children
    const tag = vnode.tag
    if (tag) {
        vnode.elm = document.createElement(tag)
        createChildren(vnode, children, insertedVnodeQueue)
        insert(parentElm, vnode.elm, refElm)
    } else {
        vnode.elm = document.createTextNode(vnode.text)
        insert(parentElm, vnode.elm, refElm)
    }
}

function createChildren(vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
        for (let i = 0; i < children.length; ++i) {
            createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i)
        }
    } else if (vnode.text) {
        vnode.elm.appendChild(document.createTextNode(String(vnode.text)))
    }
}

function insert(parent, elm, ref) {
    if (parent) {
        if (ref) {
            if (ref.parentNode === parent) {
                parent.insertBefore(elm, ref)
            }
        } else {
            parent.appendChild(elm)
        }
    }
}