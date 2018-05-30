<template>
  <div class="Home">
  
<board></board>
  
    <p>Freeze mother bitches</p>
  </div>
</template>

<script>
import router from '../router'
import board from './Board'
import list from './List'
import task from './Task'
import login from './Login'


export default {
  name: 'Home',
  components:{
    board, 
    list, 
    task,
    login,
  },




  computed:{
   
  },
  mounted(){
    if(!this.$store.state.user._id){// if no user id kick to the Login page
      router.push({name: 'Login'})
    }
  },
  data () {
    return {
      
    }
  }, 

  methods:{
   
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
