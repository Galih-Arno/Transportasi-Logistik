import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Tracking from '../views/Tracking.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Dashboard from '../views/Dashboard.vue'

const routes = [
    {path: '/', component: Home},
    {path: '/tracking', component: Tracking},
    {path: '/tracking/:resi', component: Tracking},
    {path: '/login', component: Login},
    {path: '/register', component: Register},
    {path: '/dashboard', component: Dashboard},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router