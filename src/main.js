import { createApp } from 'vue'
import router from './router'

// Global styles — order matters!
import '@fortawesome/fontawesome-free/css/all.min.css'
import './assets/css/theme.css'
import './assets/css/base.css'

import App from './App.vue'

createApp(App).use(router).mount('#app')