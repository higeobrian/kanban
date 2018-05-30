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
    baseURL: 'http://localhost:3000',
    timeout: 3000,
    withCredentials: true
})

vue.use(vuex)

export default new vuex.Store({
    state: {
        user:{},
        board:[],
        task: [],
        list: []
    },
    mutations: {
        setUser(state, user) {
            state.user = user
        },
        deleteUser(state){
            state.user = {}
        },
    },
    actions: {
        login({commit, dispatch}, loginCredentials){
            console.log(loginCredentials)
            auth.post('/auth/login', loginCredentials)
            .then(res=>{
                console.log(res)
                commit('setUser', res.data)
                router.push({name: 'Home'})
            })
            .catch(res=>{
                
            })
        },
        logout({commit, dispatch}){},
        register({commit, dispatch}, userData){},
        authenticate({commit, dispatch}){
            api.get('/authenticate')
            .then(res=>{
                console.log('auth success')
                commit('setUser', res.data)
                router.push({name: 'Home'})
            })
            .catch(res=>{})          
        },

        createBoard({commit, dispatch}, board){
            api.post('/api/boards/', board)
            .then(res=>{
                console.log(res)
            })
        }


    }

})