import {createRouter,createWebHistory} from "vue-router";

import productIndex from "../product/index"
import productnew from "../product/new"
import productEdit from "../product/edit"

import notFound from "../notFound";

const routes = [
    {
        path:'/',
        component:productIndex
    },
    {
        path:"/product/new",
        component:productnew
    },
    {
        path:"/product/edit/:id",
        component:productEdit,
        props:true
    },
    {
        path:"/:pathMath(.*)*",
        component:notFound,
    }

]

const router = createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
