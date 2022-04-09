<template>
  <div class="container">
    <UserHeader />
    
    <!-- <p id="error">Nothing to do today?</p> -->
 
    <table id="customers">
      <h1>MY TODOAPP LIST</h1>

      <tr v-for="(todo, i) in $store.state.todos" :key="i">
        <td>{{ i + 1 }}</td>
        <td>{{ todo.decsription }}</td>
        <!-- <td>{{ todo.iscompleted }}</td> -->
        <!-- <td> -->
          <!-- <button @click="updateTodo(todo.id)">UPDATE</button> -->
        <!-- </td> -->
        <!-- <td> -->
          <!-- <button @click="deleteTodo(todo.id)">DELETE</button> -->
        <!-- </td>/ -->
      </tr>
      <tr></tr>
    </table>
    <!-- <br />
    <br />
    <br /> -->
    <!-- <div class="done"><input type="text" /><button>DONE</button></div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      // username: "",
      // password: "",
      // formData: {
      //   username: this.username,
      //   password: this.password,
      // },
      errorMsg: "",
    };
  },
  async mounted() {
    await this.$store.dispatch("getAllTodos");
    return;
  },

  methods: {
    deleteTodo(id) {
      console.log(id);
      this.$store.dispatch("deleteTodo", id);
    },

    // updateTodo(id) {
    //   console.log(id);
    //   this.$store.dispatch("updateTodo", id);
    // },
  },
};
</script>

<style scoped>
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td,
#customers th {
  border: 1px solid rgb(112, 206, 65);
  padding: 8px;
}

#customers tr:nth-child(even) {
  background-color: #a3c03c;
}

#customers tr:hover {
  background-color: rgb(134, 221, 62);
}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04aa6d;
  color: white;
}
h1 {
  display: flex;
  text-align: center;
  color: rgb(59, 59, 138);
}
</style>
