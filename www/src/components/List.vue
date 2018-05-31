<template>
  <div class="List">
    {{myList.title}}
   <form @submit.prevent="createTask">
    <input type="title" name="title" id="title" placeholder="Enter title" v-model="tasks.title">
    <input type="body" name="body" id="body" placeholder="Enter body" v-model="tasks.body">      
    <button type="submit">Create Task</button>
   </form> 


  </div>
</template>

<script>
import router from "../router";
import tasks from "./Task";

export default {
  name: "List",
  props: ["myList"],
  data() {
    return {
      tasks: {}
    };
  },
  methods:{
    createTask(){
      debugger
        this.tasks['boardId'] = this.$route.params.boardId
        console.log(this.$route.params.userId)
        this.$store.dispatch("createTask", this.tasks);
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
