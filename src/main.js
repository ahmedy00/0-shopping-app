import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import store from "./stores/store.js";
import router from "./navigations/routes.js";
import 'animate.css'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
