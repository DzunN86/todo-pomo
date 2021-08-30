import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Axios from "../plugins/axios-vue";
import Store from "../store";

import AuthLayout from "@/layouts/AuthLayout";
import FullLayout from "@/layouts/FullLayout";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: FullLayout,
    children: [
      {
        path: "",
        name: "📌Wanna Be",
        component: Home,
        meta: {
          middleware: ["GuestMiddleware"]
        }
      },
      {
        path: "/login",
        name: "Login",
        component: () => import("../views/Login.vue"),
        meta: {
          middleware: ["GuestMiddleware"]
        }
      },
      {
        path: "/register",
        name: "Register",
        component: () => import("../views/Register.vue"),
        meta: {
          middleware: ["GuestMiddleware"]
        }
      },
    ],
  },
  {
    path: "/",
    component: AuthLayout,
    children: [
      {
        path: "",
        name: "Dashboard",
        component: () => import(/* webpackChunkName: "about" */ "../views/User/Dashboard.vue"),
        meta: {
          middleware: ["AuthMiddleware"],
        },
      },
      {
        path: "/allactivities",
        name: "All Activities",
        component: () => import(/* webpackChunkName: "about" */ "../views/User/AllActivities.vue"),
        meta: {
          middleware: ["AuthMiddleware"],
        },
      },
      {
        path: "/activities/work",
        name: "Work",
        component: () => import(/* webpackChunkName: "about" */ "../views/User/Work.vue"),
        meta: {
          middleware: ["AuthMiddleware"],
        },
      },
      {
        path: "/activities/learn",
        name: "Learn",
        component: () => import(/* webpackChunkName: "about" */ "../views/User/Learn.vue"),
        meta: {
          middleware: ["AuthMiddleware"],
        },
      },
      {
        path: "/activities/play",
        name: "Play",
        component: () => import(/* webpackChunkName: "about" */ "../views/User/Play.vue"),
        meta: {
          middleware: ["AuthMiddleware"],
        },
      }
    ]
  },
  {
    path: "/logout",
    name: "Logout",
    beforeEnter: (to, from, next) => {
      Axios.post("/logout/admin", {
        disableExptimestamp: true,
        disableErrNotif: true,
      }).catch(() => {});
      Store.commit("setToken", "");
      Store.commit("setExptimestamp", 0);
      next("/");
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
