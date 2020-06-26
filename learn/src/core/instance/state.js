let noop = function () { }
const sharedPropertyDefinition = {
    enumerable: true,
    configurable: true,
    get: noop,
    set: noop
}

export function proxy(target, sourceKey, key) {
    sharedPropertyDefinition.get = function proxyGetter() {
        return this[sourceKey][key]
    }
    sharedPropertyDefinition.set = function proxySetter(val) {
        this[sourceKey][key] = val
    }
    Object.defineProperty(target, key, sharedPropertyDefinition)
}

export function initState(vm) {
    vm._watchers = []

    initData(vm)
}

function initData(vm) {
    let data = vm.$options.data
    data = vm._data = typeof data === 'function'
        ? data()
        : data || {}

    // proxy data on instance
    const keys = Object.keys(data)
    let i = keys.length
    while (i--) {
        let key = keys[i]
        proxy(vm, `_data`, key)
    }
    // observe(data, true /* asRootData */)
}

