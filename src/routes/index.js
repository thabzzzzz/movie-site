import { createRouter, createWebHistory } from 'vue-router'

/* import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Movies from '../views/Movies.vue' */

const Home = () => import('../views/Home.vue');


const routes = [

    {path:"/",component:Home},
    {path:"/about",component:() => import('../views/About.vue')},
    {path:"/movies",component:() => import('../views/Movies.vue')},
    {path:"/movies/:id",component:() => import('../views/MovieDetails.vue')},
]


const router = createRouter({

    history:createWebHistory(),
    routes

})

export default router;