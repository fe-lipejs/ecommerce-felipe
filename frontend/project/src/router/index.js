import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/Views/Home.vue";
import Login from "@/components/Views/Login";
import Categoria from "@/components/Views/Categoria/Categoria.vue"
import Carrinho from "@/components/Views/Carrinho/Carrinho.vue"
import Produto from "@/components/Views/Produto/Produto.vue"

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
  },
  {
    path: "/produto",
    name: "Produto",
    component: Produto
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;