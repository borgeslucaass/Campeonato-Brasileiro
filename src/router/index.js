import Vue from 'vue'
import VueRouter from 'vue-router'
import TelaInicio from '../views/TelaInicio.vue'
import ClubesLista from '../views/ClubesLista.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'TelaInicio',
    component: TelaInicio
  },
  {
    path: '/classificacao',
    name: 'ClubesLista',
    component: ClubesLista
  },
  
]

const router = new VueRouter({
  routes
})

export default router
