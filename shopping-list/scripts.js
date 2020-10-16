//Vue.js Version 2
let app = new Vue({
    el: '#app',
    data: {
        quantity: '',
        item: ' ',
        list: [],
        counter: 0,
    },
    methods: {
        submitItem() {
            this.list.push({ item: this.item, quantity: this.quantity });
            this.counter += this.quantity;

            this.item = '';
            this.quantity = '';
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