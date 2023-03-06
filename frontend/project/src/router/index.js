import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/Views/Home.vue";
import Login from "@/components/Views/Login";
import Categoria from "@/components/Views/Categoria/Categoria.vue"
import Carrinho from "@/components/Views/Carrinho/Carrinho.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/categoria",
    name: "Categoria",
    component: Categoria
  },
  {
    path: "/carrinho",
    name: "Carrinho",
    component: Carrinho
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;