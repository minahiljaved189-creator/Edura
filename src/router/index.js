import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import LoginView from '../views/LoginView.vue'
import SignupView from '../views/SignupView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/',        name: 'home',    component: HomeView },
        { path: '/contact', name: 'contact', component: ContactView },
        { path: '/login',   name: 'login',   component: LoginView },
        { path: '/signup',  name: 'signup',  component: SignupView },
    ],
    scrollBehavior() {
        return { top: 0 }
    },
})

export default router