//Vue.js Version 2
let app = new Vue({
    el: '#app',
    data: {
        quantity: '',
        item: '',
        list: [],
        obj: {}
    },
    methods: {
        submitItem() {
            this.obj["quantity"] = this.quantity;
            this.obj["item"] = this.item;
            this.list.push(this.obj);
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