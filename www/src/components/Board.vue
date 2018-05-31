
<template>
  <div class="Board">
    <div>{{}}</div>
 <form @submit.prevent="createList">
    <input type="title" name="title" id="title" placeholder="Enter title" v-model="list.title">
    <input type="body" name="body" id="body" placeholder="Enter body" v-model="list.body">      
    <button type="submit">Create List</button>
   </form>      
 <ul>
    <li v-for="list in lists" :key="list.id">
      <lists :list='list'></lists>
    </li>

  </ul>
 

  </div>
</template>

<script>
import router from "../router";
import lists from "./List";

export default {
  name: "Board",
  props: ["boardId"],
  data() {
    return {
      list: { boardId: this.$route.params.boardId }
    };
  },
  mounted() {},
  computed: {
    user() {
      var user = this.$store.state.user;
      console.log(user);
      return user;
    },
    board() {
      var board = this.$store.state.activeBoard;
      console.log(board);
      return board;
    },
    lists() {
      return this.$store.state.boardLists;
    }
  },
  methods: {
    createList() {
      this.$store.dispatch("createList", this.list);
    }
  },
  components: {
    lists
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
