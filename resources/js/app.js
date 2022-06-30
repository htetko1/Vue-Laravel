import './bootstrap';
import 'font-awesome/css/font-awesome.css'

import Swal from 'sweetalert2/dist/sweetalert2.js';

import 'sweetalert2/dist/sweetalert2.css'

window.Swal = Swal;
const toast = Swal.mixin({
    toast:true,
    position:'top-end',
    showConfirmButton:false,
    timer:3000,
    timeProgressBar:true,
});
window.toast = toast;

import App from "./components/App"
import {createApp} from "vue";

import router from "./components/route";

createApp(App).use(router).mount("#app")
