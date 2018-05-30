<template>
  <div class="userLogin">
   
   <form @submit.prevent="userLogin">
    <input type="email" name="email" id="email" placeholder="Enter email" v-model="login.email">
    <input type="text" name="password" id="password" placeholder="Enter password" v-model="login.password">      
    <button type="submit">LOGIN</button>
   </form>


  </div>
</template>

<script>
export default {
  name: "Login",

  mounted() {
    this.$store.dispatch("authenticate");
  },
  data() {
    return {
      login: {
        email: "",
        password: ""
      }
    };
  },
  computed: {},
  methods: {
    userLogin() {
      this.$store.dispatch("login", this.login);
    }
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
