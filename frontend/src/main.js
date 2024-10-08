import Button from "primevue/button"
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Aura from '@primevue/themes/aura';
import PrimeVue from 'primevue/config';
import App from './App.vue'
import router from './router'
import '../src/assets/index.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});


app.component('Button', Button);


app.mount('#app')
