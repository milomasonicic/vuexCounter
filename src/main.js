import './assets/main.css'

import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
//decrement, and Double.
const store = createStore({
    state () {
      return {
        count: 0
      }
    },
    mutations: {
      increment (state) {
        state.count++
      },
      decrement(state){
        state.count--
      },
      double(state){
        state.count *= 2
      }
    }
  })

const app = createApp(App)
app.use(store)
app.mount('#app')
