import VNode, { createTextVNode } from './vnode'

const SIMPLE_NORMALIZE = 2
export function createElement(
    context,
    tag,
    data,
    children,
    normalizationType,
    alwaysNormalize) {
    if (alwaysNormalize) {
        normalizationType = 2
    }
    return _createElement(context, tag, data, children, normalizationType)
}

export function _createElement(
    context,
    tag,
    data,
    children,
    normalizationType
) {
    if (normalizationType === 2) {
        children = normalizeChildren(children)
    } else if (normalizationType === 1) {
        children = simpleNormalizeChildren(children)
    }

    if (typeof tag === 'string') {
        let vnode = new VNode(
            tag, data, children,
            undefined, undefined, context
        )
        return vnode
    }
}

export function simpleNormalizeChildren(children) {
    for (let i = 0; i < children.length; i++) {
        if (Array.isArray(children[i])) {
            return Array.prototype.concat.apply([], children)
        }
    }
    return children
}

export function normalizeChildren(children) {
    return isPrimitive(children)
        ? [createTextVNode(children)]
        : Array.isArray(children)
            ? normalizeArrayChildren(children)
            : undefined
}


/**
 * Check if value is primitive.
 */
export function isPrimitive(value) {
    return (
        typeof value === 'string' ||
        typeof value === 'number' ||
        // $flow-disable-line
        typeof value === 'symbol' ||
        typeof value === 'boolean'
    )
}