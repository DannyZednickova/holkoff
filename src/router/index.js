import { createRouter, createWebHistory } from 'vue-router'

import App from "@/App.vue";
import Info from "../components/Info.vue";
import Home from "../components/Home.vue";
import Actions from "../components/Actions.vue";
import Contacts from "../components/Contacts.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home,


    },
    {
      path: '/info',
      component: Info,


    },
    {
      path: '/actions',
      component: Actions,


    },
    {
      path: '/contacts',
      component: Contacts,


    }

  ]
})

export default router
