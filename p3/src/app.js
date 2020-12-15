import Cart from '@/common/Cart.js';
export const axios = require('axios').create({
    baseURL: process.env.VUE_APP_API_URL ?? 'https://e28-api.lefthandedcat.me',
    responseType: 'json',
    withCredentials: true
})

export const cart = new Cart();