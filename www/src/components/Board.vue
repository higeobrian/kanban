
<template>
  <div class="Board">
    <form @submit.prevent="createBoard">
    <input type="title" name="title" id="title" placeholder="Enter title" v-model="board.title">
    <input type="body" name="body" id="body" placeholder="Enter body" v-model="board.body">      
    <button type="submit">Create Board</button>
   </form>
  </div>
</template>

<script>
export default {
  name: 'Board',
  data () {
    return {
        board:{
            title: '',
            body: '',
            userId: ''
        }
    }
  },

computed:{
    user(){
     var user = this.$store.state.user
     console.log(user)
     return user
    }
    // boards(){
    //   var board = this.$store.state.board
    //   return board
    // }
  },
  methods:{
       createBoard(){
        this.$store.dispatch('createBoard', this.board)
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
