import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {MotionPlugin} from "@vueuse/motion";


// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import './assets/css/main.scss'

const app = createApp(App)
app.use(router)
app.use(MotionPlugin)
app.mount('#app')
