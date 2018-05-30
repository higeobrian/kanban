import vue from 'vue'
import vuex from 'vuex'
import router from '../router'
import axios from 'axios'

let api = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 3000,
    withCredentials: true

})

let auth = axios.create({
    baseURL: 'http://localhost:3000/auth',
    timeout: 3000,
    withCredentials: true
})



vue.use(vuex)

export default new vuex.Store({
    state: {
        user:{}
    },
    mutations: {
        setUser(state, user) {
            state.user = user
        },
        deleteUser(state){
            state.user = {}
        }
    },
    actions: {
        login({commit, dispatch}, loginCredentials){
            auth.post('login', loginCredentials)
            .then(res=>{
                commit('setUser', res.data)
                router.push({name: 'Home'})
            })
        },
        logout({commit, dispatch}){},
        register({commit, dispatch}, userData){},
        authenticate({commit, dispatch}){
            api.get('/authenticate')
            .then(res=>{
                commit('setUser', res.data)
                router.push({name: 'Home'})
            })
            .catch(res=>{})          
        }

    }

})