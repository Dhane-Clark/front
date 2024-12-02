import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import user from '../components/users'
import Login from '../components/userLog'
import dash from '../components/UserDash'
import patient from '../components/inputPatient'
import dashPatient from '../components/PatientDash'
import about from '../components/About'
import service from '../components/service'
import contact from '../components/contact'
import app from '../components/app'
import price from '../components/price'
import admin from '../components/AdminDash'
import room from '../components/roomDash'
import inventory from '../components/Dashinventory'
import billing from '../components/Dashbilling'


const routes = [
  {
    path: '/',
    component: Login
  },
  {
    path: '/register',
    component: user
  },
  {
    path: '/user-dashboard',
    component: dash
  },
  {
    path: '/patient',
    component: patient
  },
  {
    path: '/PatientDash',
    component: dashPatient
  },
  {
    path: '/service',
    component: service
  },
  {
    path: '/about',
    component: about
  },
  {
    path: '/contact',
    component: contact
  },
  {
    path: '/appointment',
    component: app
  },
  {
    path: '/price',
    component: price
  },
  {
    path: '/admin-dashboard',
    component: admin
  },
  {
    path: '/room-assignment-dashboard',
    component: room
  },
  {
    path: '/inventory-dashboard',
    component: inventory
  },
  {
    path: '/billing-dashboard',
    component: billing
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
