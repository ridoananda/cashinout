import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import './main.css'
import store from './store'
// import moment from 'moment'
// import 'moment/dist/locale/id'
// moment.locale('id');

createApp(App).use(store).use(router).mount('#app')
