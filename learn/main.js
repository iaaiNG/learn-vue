import Vue from "./src/core/instance"

window.app = new Vue({
    el: '#app',
    data() {
        return {
            message: "Hello vue"
        }
    },
    render(c) {
        return c('div', {
            attrs: {
                id: 'app'
            }
        }, [c('div', {
            attrs: {
                id: 'app'
            }
        }, this.message)])
    }
})