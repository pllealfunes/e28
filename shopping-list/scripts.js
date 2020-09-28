//Vue.js Version 2
let app = new Vue({
    el: '#app',
    data: {
        quantity: '',
        thing: ' ',
        item: [
            [this.quantity, this.thing]
        ],
        list: []
    },
    methods: {
        submitItem() {
            this.list.push(this.item);
        }
    }
})

//Vue.js Version 3
/*const app = Vue.createApp({
    data() {
        return {
            item: '',
            list: []
        }
    }
}).mount('#app');*/