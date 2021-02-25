import example from './example.vue'

export default {
    controller: function ($element) {
        this.vue = new Vue({
            el: $element.find('example')[0]
        })
    },

    template: `<example ng-non-bindable></example>`
}