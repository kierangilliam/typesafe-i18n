import { navigatorDetector } from 'typesafe-i18n/detectors'
import { createApp } from 'vue'
import App from './App.vue'
import { detectLocale } from './i18n/i18n-util'
import { plugin } from './i18n/i18n-vue'

const app = createApp(App)

// detect user's preferred locale
const detectedLocale = detectLocale(navigatorDetector)
// activate i18n plugin
app.use(plugin, detectedLocale)

app.mount('#app')