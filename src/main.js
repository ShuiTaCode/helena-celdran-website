import { createApp } from 'vue'
import App from './App.vue'


import PrimeVue from 'primevue/config';
import Dropdown from "primevue/dropdown";
import Button from "primevue/button";
import Editor from 'primevue/editor';
import InputText from "primevue/inputtext";
import Sidebar from "primevue/sidebar";
//theme
import "primevue/resources/themes/lara-light-indigo/theme.css";

//core
import "primevue/resources/primevue.min.css";

import './assets/main.css'

import 'primeicons/primeicons.css';
import router from './router';

const app = createApp(App);

app.component("Button",Button)
app.component("Dropdown",Dropdown)
app.component("Editor",Editor)
app.component("InputText",InputText)
app.component("Sidebar",Sidebar)
app.use(router);
app.use(PrimeVue);
app.mount('#app');
// createApp(App).mount('#app')
