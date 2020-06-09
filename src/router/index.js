import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress/nprogress'
import jsCookies from 'js-cookie'
import Home from '../views/Home.vue'
import authRoutes from './authRoutes'
import usersRoutes from './usersRoutes'
import store from '../store'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      gaurd: "auth",
    },
  },
  ...authRoutes,
  ...usersRoutes,
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})
router.beforeEach(async (routeTo, routeFrom, next) => {
  const gaurd = routeTo.matched[0].meta.gaurd;
  if (routeFrom.name !== null) {
    // Start the route progress bar.
    NProgress.start()
  }
  switch (gaurd) {
    case "auth":
      let token = jsCookies.get('access_token');
      let isLoggedIn = store.getters['auth/isLoggedIn'];
      if(token){
        if(isLoggedIn){
          next();
        }
        else {
          const init = await store.dispatch('auth/init');
          if(init){
            next()
          }
          else{
            jsCookies.remove('access_token') // access token has expired
            next({name: 'Login'}) // change the name to ur login route
          }
        }
      }else {
        next({name: 'Login'}) // change the name to ur login route
      }
      NProgress.done()
      break;
    case "guest":
      //make sure user is not logged in
      next();
      break;
    default:
      next()
      break;
  }
})
router.beforeResolve(async (routeTo, routeFrom, next) => {
  // Create a `beforeResolve` hook, which fires whenever
  // `beforeRouteEnter` and `beforeRouteUpdate` would. This
  // allows us to ensure data is fetched even when params change,
  // but the resolved route does not. We put it in `meta` to
  // indicate that it's a hook we created, rather than part of
  // Vue Router (yet?).
  try {
    // For each matched route...
    for (const route of routeTo.matched) {
      await new Promise((resolve, reject) => {
        // If a `beforeResolve` hook is defined, call it with
        // the same arguments as the `beforeEnter` hook.
        if (route.meta && route.meta.beforeResolve) {
          route.meta.beforeResolve(routeTo, routeFrom, (...args) => {
            // If the user chose to redirect...
            if (args.length) {
              // If redirecting to the same route we're coming from...
              if (routeFrom.name === args[0].name) {
                // Complete the animation of the route progress bar.
                NProgress.done()
              }
              // Complete the redirect.
              next(...args)
              reject(new Error('Redirected'))
            } else {
              resolve()
            }
          })
        } else {
          // Otherwise, continue resolving the route.
          resolve()
        }
      })
    }
    // If a `beforeResolve` hook chose to redirect, just return.
  } catch (error) {
    return
  }

  // If we reach this point, continue resolving the route.
  next()
})

// When each route is finished evaluating...
router.afterEach((routeTo, routeFrom) => {
  // Complete the animation of the route progress bar.
  NProgress.done()
})
export default router