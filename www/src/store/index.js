import vue from 'vue'
import vuex from 'vuex'
import router from '../router'
import axios from 'axios'

var production = !window.location.host.includes('localhost');
var baseUrl = production ? '//kanban-fun.herokuapp.com/' : '//localhost:3000';

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
        boards:[],
        activeBoard:[],
        tasks: {},
        lists: [],
        boardLists: [], 
        comment: {}
    },
    mutations: {
        setUser(state, user) {
            state.user = user
        },
        deleteUser(state){
            state.user = {}
        },
        createBoard(state, board){ //may not be correct
            state.boards.push(board) 
        }, 
        displayBoards(state, boards){
            state.boards = boards
        },
        createList(state, list){
            state.lists.push(list)
        },
        getList(state, list){
            state.lists = list
        },
        createTask(state, task){
            //state.tasks.push(task)
            state.tasks = task
        },
        setTasks(state, tasks){
            console.log(tasks)
            // debugger
            if(tasks[0]){ //taking the first element and grabbing the listId from it
                state.tasks[tasks[0].listId] = tasks
                // console.log('This one', state.tasks)
            }          
        },
        setComments(state, comments) {
            state.comments = comments
        },
        deleteComment(state) {
            state.comment = {}
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

        //Brian ADded logout/register double check..
        logout({commit, dispatch}){
            auth.delete('/logout') 
            .then(res=>{
                commit('deleteUser')
                router.push({name: 'login'})
            })
        },


        register({commit, dispatch}, userData){
            auth.post('register', userData) 
            .then(res=>{
                commit('setUser', res.data)
                router.push({name: 'Home'})
            })
        },
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

            // board.userId = this.user.userId
            // console.log(this.user)
            // console.log(board)
             api.post('/api/boards/', board)
            .then(res=>{
                console.log(res.data)
                commit('createBoard', res.data)
            })
            
        },
        getBoards({commit, dispatch}, userId){
            api.get('/api/boards/user/'+ userId)
            .then(res=>{
                console.log(res.data)
                commit('displayBoards', res.data)
            })
        },
        createList({commit, dispatch}, list){
        //   debugger
          //  console.log(list)
            api.post('/api/lists', list)
            .then(res=>{
                console.log(res.data)
                commit('createList', res.data)
            })
        }, 
        getLists({commit, dispatch}, boardId){
         //   console.log(boardId)
            api.get('/api/boards/' + boardId + '/lists')
            .then(res=> {
            //    console.log(res)
                commit('getList', res.data)
            })
        },
        createTask({commit, dispatch}, task){
           console.log(task)
         //   debugger
            api.post('/api/tasks', task)
            .then(res=>{
              //  debugger
             //   console.log(res)
             //  commit('createTask', res.data)
                    dispatch('getTasks', task.listId )
            }).catch(err=>{ 
                console.error(err)
            })
        },
        getTasks({commit, dispatch}, listId){
            var ghost = listId
            console.log(ghost)
            
            api.get('/api/lists/' + listId +'/tasks')
                .then(res=>{
                  
                    console.log(res)
                    // debugger
                    commit('setTasks', res.data)
                })
            },
            getComments({dispatch, commit}, taskId) { //by taskId
                api.get('/api/comments/' + taskId)  //api/comments/:id 
                  .then(res => {
                    console.log(res)
                    commit('setComments',// don't know what goes here.) //need to finish mutations..
                  )
                  })
                  .catch(err => console.log(err))
              },
          
        
                deleteComment({dispatch, commit}, comment) {
                    api.delete('/api/comments/' + comment._id) //api/comments/:id
                      .then(res => {
                        console.log(res) //right?
                        dispatch('getComments', comment.taskId) 
                      })
                      .catch(err => console.log(err))
                  },


            //     createComment({commit, dispatch}, comment){
            //     api.post('/api/comments', comment)
            //     .then(res=>{
            //         dispatch('getComments', comment.taskId)
            //     })
            //     .catch(err=>{
            //         console.err(err)
            //     })
            // },

            // getComments({commit, dispatch}, taskId){

            // }
            
         }
        
        






    }

})