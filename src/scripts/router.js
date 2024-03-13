import NshopHome from "@/pages/NshopHome.vue";
import NshopLogin from "@/pages/NshopLogin.vue";
import {createRouter, createWebHistory} from "vue-router";


const routes = [
    {path: '/', component:NshopHome},
    {path: '/login', component:NshopLogin},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;