import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";
import HomePage from "@/components/HomePage.vue";
import Header from "@/components/layout/HeaderComponent.vue";
import Footer from "@/components/layout/FooterComponent.vue";
import BasicEditor from "@/components/BasicEditor/BasicEditor.vue";
import { RouterName } from "@/constant.ts";

const defaultComponents = { header: Header, footer: Footer };

const routes: Readonly<RouteRecordRaw[]> = [
  {
    path: "/",
    components: { ...defaultComponents, default: HomePage },
  },
  {
    path: "/basic",
    name: RouterName.BasicEditor,
    components: { ...defaultComponents, default: BasicEditor },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
