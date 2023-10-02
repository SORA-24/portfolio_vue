import './assets/reset.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './assets/base.css'
import './assets/base_form.css'
import './assets/common.css'
import './assets/main.css'

// vueのメソッドをimport
import { createApp } from 'vue'

import App from './App.vue'

// div要素#appにApp.vueの内容をマウント
createApp(App).mount('#app') //rootコンポーネント（大枠）
