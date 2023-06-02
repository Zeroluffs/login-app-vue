import { createWebHistory, createRouter } from "vue-router";
import Login from "./views/Login.vue";
import HelloWorld from "./components/HelloWorld.vue";
import Register from "./views/Register.vue";
import Profile from "./views/Profile.vue";
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
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/profile",
    name: "profile",
    // lazy-loaded
    component: Profile,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  const publicPages = ["/login", "/register"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem("user");
  if (authRequired && !loggedIn) {
    next("/login");
  } else {
    next();
  }
});

export default router;
