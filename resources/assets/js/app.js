require('./bootstrap');
window.Vue = require('vue');

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


//Define Route Components
let Myheader=require('./components/Myheader.vue');
let Myfooter=require('./components/Myfooter.vue');

let Home=require('./components/Home.vue');
let About=require('./components/About.vue');

//Defeine some routes
const routes = [
  { path: '/home', component: Home },
  { path: '/about', component: About }
]

//Create the router instance and pass the `routes` option
const router = new VueRouter({
	mode:'history',
    routes // short for `routes: routes`
})

// Create and mount the root instance.
const app = new Vue({
    el: '#app',
     router,
    components:{Myheader,Myfooter}   
});

