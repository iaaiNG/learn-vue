export default class VNode {
    constructor(
        tag,
        data,
        children,
        text,
        elm,
    ) {
        this.tag = tag
        this.data = data
        this.children = children
        this.text = text
        this.elm = elm
    }
}

export function createTextVNode(val) {
    return new VNode(undefined, undefined, undefined, String(val))
}
