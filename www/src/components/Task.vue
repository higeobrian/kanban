<template>
  <div class="Task">
   {{myTask.title}}
   <form @submit.prevent="createComment">
    <input type="title" name="title" id="title" placeholder="Enter title" v-model="comment.title">
    <input type="body" name="body" id="body" placeholder="Enter body" v-model="comment.body">      
    <button type="submit">Create Comment</button>
   </form> 
  <ul>
   <li v-for="comment in comments" :key="comment._id">
     <!-- <tasks :myTask="task"></tasks>  
       -->
       {{comment.title}}
     </li>
   </ul>




<!-- DELETE BUTTON ADDED, ALONG WITH ABILITY TO MOVE TASKS FROM LIST TO LIST -->




    
    <!-- <div class="moveTask">
        {{task.title}}
      <form @submit.prevent="moveTask">
          <select name="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="fiat">Fiat</option>
              <option value="audi">Audi</option>
            </select>
      
          <button>SWITCH LIST</button>
          <div v-for="task in tasks" :key="task._id"></div>
        </form>
          <a  v-for="list in lists" @click="moveTask(list._id, task)" class="dropdown-item">{{list.title}}</a>
         
    </div>
    </div>
    </div> -->

    <comments :listId="listId" :taskId="task._id"></comments>
<button @click="deleteTask(task)">DELETE TASK</button>
</div>
  </div>




<!-- DELETE BUTTON ADDED, ALONG WITH ABILITY TO MOVE TASKS FROM LIST TO LIST -->






  </div>
</template>

<script>
import router from '../router';
import comment from './Comment'; //i think we need to import this. 
export default {
  name: 'Task',
  props:['myTask'],
  data () {
    return {
      comment:{
        title: "",
        body: ""
      }
    };
  },
  computed:{
    tasks(){
    //  debugger
      console.log(this.myTask._id)
        return this.$store.state.task[this.myTask._id]
    }, 
    lists(){
        return this.$store.state.lists
      }
  },
  methods:{
    createTask(){
    
      var newTask = this.task;
      newTask.taskId = this.myTask._id;
      console.log(newTask)

    this.$store.dispatch("createTask", newTask);
    },
    getTask(){
      this.$store.dispatch('getTasks', this.listId)
    },
    deleteTask(task){
        this.$store.dispatch('deleteTask', task)
    },
    getLists(){
        this.$store.dispatch('getLists')
      },
    moveTask(){

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>