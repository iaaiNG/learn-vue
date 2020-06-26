import { createElement } from '../vdom/create-element'

export function initRender(vm) {
    vm.$createElement = (a, b, c, d) => createElement(vm, a, b, c, d, true)
}