import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Padre",
    children: [
      {
        path: "/",
        name: "Madre",
        component: () => import("@/pages/AppWrapper.vue"),
        children: [
          {
            path: "/",
            name: "Main",
            component: () => import("@/views/HomeView.vue"),
          },
        ],
      },
      {
        path: "/index2",
        name: "Madre2",
        component: () => import("@/pages/AppWrapper2.vue"),
        children: [
          {
            path: "/index2",
            name: "Main2",
            component: () => import("@/views/HomeView2.vue"),
          },
        ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
