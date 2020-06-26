import { initState } from './state'
import { initRender } from './render'
import { mountComponent } from "./lifecycle"

function Vue(options) {
    this._init(options)
}

Vue.prototype._init = function (options) {
    let vm = this
    vm.$options = options
    vm._self = vm

    // initLifecycle(vm)
    // initEvents(vm)
    initRender(vm)
    // callHook(vm, 'beforeCreate')
    // initInjections(vm) // resolve injections before data/props
    initState(vm)
    // initProvide(vm) // resolve provide after data/props
    // callHook(vm, 'created')

    if (vm.$options.el) {
        vm.$mount(vm.$options.el)
    }
}

// public mount method
Vue.prototype.$mount = function (
    el,
    hydrating
) {
    el = document.querySelector(el)

    const options = this.$options
    // resolve template/el and convert to render function
    if (!options.render) {
        // 巴拉巴拉
    }

    return mountComponent(this, el, hydrating)
}

Vue.prototype._render = function () {
    const vm = this
    const { render } = vm.$options

    // render self
    let vnode = render.call(vm, vm.$createElement)

    
    return vnode
}

export default Vue