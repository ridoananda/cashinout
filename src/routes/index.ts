import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'home',
		component: () => import("../views/Home.vue"),
	},
	{
		path: '/about',
		name: 'about',
		component: () => import("../views/About.vue"),
	},
	{
		path: '/signin',
		name: 'login',
		component: () => import("../views/SignIn.vue"),
	},
	{
		path: '/signup',
		name: 'register',
		component: () => import("../views/SignUp.vue"),
	},
	{
		path: '/transaction/:slug',
		name: 'transaction.detail',
		component: () => import("../views/Transaction/Detail.vue"),
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'PageError',
		component: () => import("../views/Home.vue")
	},
]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
	linkActiveClass: 'text-black dark:text-white'
})

export default router