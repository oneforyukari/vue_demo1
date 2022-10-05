import { createApp } from 'vue'
import App from './App.vue'
import axios from "axios";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import VueAxios from 'vue-axios'

createApp(App).use(ElementPlus).use(VueAxios,axios).mount('#app')


