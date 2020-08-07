import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import HelloWorld from './components/HelloWorld'
import DemoComponent1 from './components/DemoComponent1'
import Home from './components/Home1'
import StudentList from './components/StudentList'


//import vue router
import VueRouter from 'vue-router'

Vue.config.productionTip = false
//use vue router
Vue.use(VueRouter)

const routes = [
    { path: '/', component: Home },
    { path: '/greet', component: HelloWorld },
    { path: '/demo', component: DemoComponent1 },
    { path: '/students', component:  StudentList},
]
const router = new VueRouter({routes, mode: 'history'}) 


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
