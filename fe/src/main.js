/* main.js */

// import './assets/w3.css'
import './assets/common.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './vuex/store'  //1. store 추가

// createApp(App).mount('#app')
const app = createApp(App)
app.config.globalProperties.$axios = axios;  //전역변수로 설정 컴포넌트에서 this.$axios 호출할 수 있음
app.config.globalProperties.$serverUrl = '//localhost:8081' //api server
app.config.globalProperties.$store = store
app.use(router).use(store).mount('#app')
