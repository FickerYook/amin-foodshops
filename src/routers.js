import HomePage from './components/Home.vue'
import SignUp from './components/SignUp.vue'
import { createRouter, createWebHistory } from 'vue-router'
import SignIn from './components/SignIn.vue'
import AddPage from './components/Add.vue'
import UpdatePage from './components/Update.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component:HomePage, name:'HomePage'},
        { path: '/sign-up', component:SignUp, name:'SignUp'},
        { path: '/sign-in', component:SignIn, name:'SignIn'},
        { path: '/add', component:AddPage, name:'AddPage'},
        { path: '/update/:id', component:UpdatePage, name:'UpdatePage'},
    ],
});


// const routes = [
//     {
//         name:'Home',
//         component:Home,
//         path: '/'
//     },
//     {
//         name:'SignUp',
//         component:SignUp,
//         path:'/sign-up'
//     }
// ];

// const router = createRouter({
//     history: createWebHistory(),
//     routes
// })

export default router;  