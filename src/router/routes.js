const routes = [{
    path: "/loading",
    component: () => import("pages/loading.vue"),
    name: "loading",
  },
  {
    path: "/",
    component: () => import("layouts/MyLayout.vue"),
    children: [{
        path: '/',
        component: () => import('pages/home.vue'),
        name: "home",
      },
      // NOTE  หน้าระบบออนไลน์
      {
        path: "/online",
        component: () => import('pages/learnonline.vue'),
        name: "online",
      },
      // NOTE  หน้าระบบนักเรียน
      {
        path: "/school",
        component: () => import('pages/learnschool.vue'),
        name: "school",
      },

      // NOTE  หน้าโครงสร้างบทเรียนของ
      {
        path: "/structure",
        component: () => import('pages/structure.vue'),
        name: "structure",
      },

      // NOTE  หน้าเข้าสู่ระบบ
      {
        path: "/login",
        component: () => import('pages/login.vue'),
        name: "login",
      },
    ]

  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
