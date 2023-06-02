import { createWebHistory, createRouter } from "vue-router";
import Login from './views/Login.vue';
import HelloWorld from "./components/HelloWorld.vue";

const routes = [
    {
      path: "/",
      name: "home",
      component: HelloWorld,
    },
    {
      path: "/home",
      component: HelloWorld,
    },
    {
      path: "/login",
      component: Login,
    },
    // {
    //   path: "/register",
    //   component: Register,
    // },
    // {
    //   path: "/profile",
    //   name: "profile",
    //   // lazy-loaded
    //   component: Profile,
    // },
    // {
    //   path: "/admin",
    //   name: "admin",
    //   // lazy-loaded
    //   component: BoardAdmin,
    // },
    // {
    //   path: "/mod",
    //   name: "moderator",
    //   // lazy-loaded
    //   component: BoardModerator,
    // },
    // {
    //   path: "/user",
    //   name: "user",
    //   // lazy-loaded
    //   component: BoardUser,
    // },
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;