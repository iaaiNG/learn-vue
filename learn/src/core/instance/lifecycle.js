import Watcher from '../observer/watcher'

let noop = function () { }
export function mountComponent(vm, el, h) {
    vm.$el = el
    let updateComponent = () => {
        vm._update(vm._render())
    }

    new Watcher(vm, updateComponent, noop, {}, true /* isRenderWatcher */)

    if (vm.$vnode == null) {
        vm._isMounted = true
    }
    return vm
}