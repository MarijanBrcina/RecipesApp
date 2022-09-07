import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import recipes from '@/store/modules/recipes';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      potrebnaPrijava: true
    }
  },
  {
    path: '/pregled-recepta/:id',
    name: 'PregledRecepta',
    component: () => import('../views/PregledRecepta'),
    props: true, 
    meta: {
      potrebnaPrijava: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../views/Signup.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => { 
console.log("stara ruta", from.name, "nova ruta", to.name, "korisnik", recipes.currentUser)

const noUser = recipes.currentUser === null;

if(noUser && to.meta.potrebnaPrijava) {
  next('login');
} else {
next(); 
}
})

export default router
