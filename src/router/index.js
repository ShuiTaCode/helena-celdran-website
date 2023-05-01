import { createRouter, createWebHistory } from 'vue-router';

// Import components that you want to use as routes
import Home from '../components/views/Home.vue';
import Edit from "../components/views/Edit.vue";
// import About from '../components/viess/About.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/edit',
        name: 'Edit',
        component: Edit
    },
    // {
    //     path: '/about',
    //     name: 'About',
    //     component: About
    // }
];

const router = createRouter({
    // history: createWebHistory(process.env.BASE_URL),
    history: createWebHistory(),
    routes
});

export default router;
