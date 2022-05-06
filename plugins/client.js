import Vue from 'vue'
import LocomotiveScroll from '@/LocomotiveScroll/plugin/index.js'

import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)

Vue.component('ApexChart', VueApexCharts)

Vue.use(LocomotiveScroll)
