import { createElement } from '../vdom/create-element'

export function initRender(vm) {
    vm.$createElement = (a, b, c, d) => createElement(vm, a, b, c, d, true)
}
// c(
//     'div', aaaaaaaaaaaaaa
//     { bbbbbbbbbbbbbbbb
//         attrs: {
//             id: 'app'
//         }
//     },
//     this.message ccccccccccccccccccc
// )