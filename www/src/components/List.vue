<template>
  <div class="List">
    {{myList.title}}
   <form @submit.prevent="createTask">
    <input type="title" name="title" id="title" placeholder="Enter title" v-model="task.title">
    <input type="body" name="body" id="body" placeholder="Enter body" v-model="task.body">      
    <button type="submit">Create Task</button>
   </form> 


  </div>
</template>

<script>
import router from "../router";
import tasks from "./Task";
//import lists from "./List"

export default {
  name: "List",
  props: ["myList"],
  data() {
    return {
      task: {}
       
    };
  },
  computed:{
      user() {
      var user = this.$store.state.user;
      console.log(user);
      return user;
    },
    // board() {
    //   var board = this.$store.state.activeBoard;
    //   return board;
    // },
    lists() {
      return this.$store.state.lists;
    },
    tasks() {
      return this.$store.state.tasks;
    },
  },
  methods:{
    createTask(){
      debugger
        this.task['boardId'] = this.$route.params.boardId
        console.log(this.$route.params.userId)
        this.$store.dispatch("createTask", this.task);
    }
  },
  components: {
    tasks
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
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
