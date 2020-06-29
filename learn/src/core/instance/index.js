import { initState } from "./state";
import { initRender } from "./render";
import { mountComponent } from "./lifecycle";
import { patch } from "../vdom/patch"

function Vue(options) {
    this._init(options);
}

Vue.prototype._init = function (options) {
    let vm = this;
    vm.$options = options;

    initRender(vm);
    initState(vm);

    if (vm.$options.el) {
        vm.$mount(vm.$options.el);
    }
};

// public mount method
Vue.prototype.$mount = function (el) {
    el = document.querySelector(el);
    return mountComponent(this, el);
};

Vue.prototype._render = function () {
    const vm = this;
    const { render } = vm.$options;
    let vnode = render.call(vm, vm.$createElement);
    return vnode;
};
Vue.prototype._update = function (vnode) {
    const vm = this
    vm._vnode = vnode

    vm.$el = vm.__patch__(vm.$el, vnode, undefined, false /* removeOnly */)

    // restoreActiveInstance()
    // // update __vue__ reference
    // if (prevEl) {
    //     prevEl.__vue__ = null
    // }
    // if (vm.$el) {
    //     vm.$el.__vue__ = vm
    // }

    // if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
    //     vm.$parent.$el = vm.$el
    // }
};
Vue.prototype.__patch__ = patch

export default Vue;
