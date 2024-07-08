// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './pages/HomeView.vue';
import BlogView from './pages/BlogView.vue';
import ArticlePage from './pages/ArticlePage.vue';

const routes = [
    {
        path: '/',
        name: 'HomeView',
        component: HomeView,
    },
    {
        path: '/blog',
        name: 'BlogView',
        component: BlogView,
    },
    {
        path: '/blog/:slug',
        name: 'ArticlePage',
        component: ArticlePage,
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('./pages/NotFound.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
