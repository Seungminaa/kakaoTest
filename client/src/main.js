import {
  createApp
} from 'vue'

import App from './App.vue'
import router from './router'
import mixins from './mixins'
import store from './store'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

// import 'bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'

const app = createApp(App);
app.use(router);
app.mixin(mixins);
app.use(store);
app.use(VueSweetalert2);
app.mount('#app');

window.Kakao.init("3417f296b9ba3b697980f5786262df50");