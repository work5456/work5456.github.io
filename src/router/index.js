import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

import setTitle from './setTitle'

Vue.use(VueRouter)

const router = new VueRouter({routes})

router.beforeEach(setTitle)

export default router