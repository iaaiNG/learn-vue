export default class Watcher {
    constructor(
        vm,
        expOrFn,
        cb,
        options,
        isRenderWatcher
    ) {
        this.vm = vm
        this.getter = expOrFn
        this.get()
    }

    get() {
        const vm = this.vm
        return this.getter.call(vm, vm)
    }
}