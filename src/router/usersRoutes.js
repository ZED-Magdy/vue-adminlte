export default [
    {
        path: '/users',
        name: 'Users',
        meta:{
          gaurd: "guest",
        },
        component: () => import( /** webpackChunkName "About" */ '../views/About.vue')
      },
]