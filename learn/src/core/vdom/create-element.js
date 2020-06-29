import VNode, { createTextVNode } from './vnode'

export function createElement(
    context,
    tag,
    data,
    children
) {
    return _createElement(context, tag, data, children)
}

export function _createElement(
    context,
    tag,
    data,
    children
) {
    children = normalizeChildren(children)
    let vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
    )
    return vnode
}

export function normalizeChildren(children) {
    return Array.isArray(children)
        ? normalizeArrayChildren(children)
        : [createTextVNode(children)]
}

function normalizeArrayChildren(children, nestedIndex) {
    const res = []
    let i, c
    for (i = 0; i < children.length; i++) {
        c = children[i]
        res.push(c)
    }
    return res
}