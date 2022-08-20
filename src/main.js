import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
import './assets/iconfont/iconfont.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
// 创建一个新的 store 实例
const store = createStore({
    state() {
        return {
            count: 0
        }
    },
    mutations: {
        increment(state) {
            state.count++
        }
    }
})
store.commit('increment')

console.log(store.state.count) // -> 1
// 将 store 实例作为插件安装
app.use(store)
app.use(ElementPlus, {
    locale: zhCn,
  })
app.mount('#app')