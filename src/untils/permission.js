import router from '@/router/index.js'
import store from '@/store/index.js'
import { getToken, removeToken, removeUserName, removeBread } from './systemStorage.js'

// indexOf方法判断数组中是否存在指定的某个对象，如果不存在则返回 -1
const whiteRouter = ['/login']

router.beforeEach((to, from, next) => {
    console.log(to.path)
    if (getToken()) {
        // console.log('有token了')
        if (to.path == '/login') {
            removeToken()
            removeUserName()
            removeBread()
            store.commit('loginModule/SET_TOKEN', '')
            store.commit('loginModule/SET_USERNAME', '')
            next()
        } else {
            next()
        }
    } else {
        // console.log('没token')
        if (whiteRouter.indexOf(to.path) !== -1) {
            next()
        } else {
            next()
            // next('/login')
        }
        /*
           1.直接进入index的时候，参数to变成了'/index'，触发了路由指向，就会跑beforeEach
           2.再一次next指向了login，再次发生了路由指向再跑beforeEach，参数的to变成了'/login'
           3.白名单判断存在，则直接next()，因为没有参数，所以不会再次跑beforeEach
        */
    }
})