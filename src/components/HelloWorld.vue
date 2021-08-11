<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
 
  </div>
</template>

<script>
import { mapActions} from "vuex";
import userStore from "../store/module/usersStore"

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  store:{
    userStore
  },
  created(){
    this.getUsers();
    this.getUser();
   
  },
 methods: {
   ...mapActions('usersStore', ['setArrayOFUsersListAction']),  
      getUser(){
           fetch('https://jsonplaceholder.typicode.com/users')
              .then(response => response.json())
      },
        getUsers(){
          fetch('https://jsonplaceholder.typicode.com/users')
              .then(response => response.json())
              .then(json => {
                console.log("json of users",json);
               
                this.setArrayOFUsersListAction(json);
               
                
              
              })

        }

    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
