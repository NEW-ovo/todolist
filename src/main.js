import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import './index.css'
import './assets/css/bootstrap.css'
import './assets/iconfont/iconfont.css'

const app = createApp(App)

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

app.mount('#app')