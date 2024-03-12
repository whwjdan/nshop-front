import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'
import NshopHome from "@/pages/NshopHome.vue";
import NshopLogin from "@/pages/NshopLogin.vue";

const routes = [
    {path: '/', component:NshopHome},
    {path: '/login', component:NshopLogin},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app')
