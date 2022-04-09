const state = () => ({
    token: null,
    GetMyTodos: [],
    todos: [],
    // Update:[],
    Create: [],
 });
 
 const getters = {};
 
 const mutations = {
    setToken(state, data) {
       state.token = data;
    },
    GetMyTodos(state, data) {
        state.GetMyTodos = data;
     },
     getAllTodos(state, data) {
         state.todos = data;
         console.log(state.todos);
     },
    //  Update(state, data) {
    //     state.Update = data;
    //  },
     CreateTodo(state, data) {
        // state.Update = data;
     },
 };
 
 const actions = {
    async login({ commit }, data) {
        console.log(data.username)
        console.log(data.password)
        await this.$axios.post("http://localhost:5000/api/user/login", {
           username: data.username,
           password: data.password,
        }).then((res) => {
           console.log(res.data);
          commit('setToken', res.data);
        })
     },

     async GetMyTodos({ commit, state }) {
        await this.$axios.get("http://localhost:5000/api/todo/getmytodo", {
           headers: { 'Authorization': 'Bearer ' + state.token }
        }).then((res) => {
           console.log(res.data);
        //    this.$router.push('/UserHome');
           commit('GetMyTodos', res.data);
        })
     },
     async getAllTodos({ commit, state }) {
        await this.$axios.get("http://localhost:5000/api/todo", {
           headers: { 'Authorization': 'Bearer ' + state.token }
        }).then((res) => {
           console.log(res.data);
           // this.$router.push('/');
           commit('getAllTodos', res.data);
        })
     },
    //  async Update({ commit, state }) {
    //     await this.$axios.get("http://localhost:5000/api/Todolist", {
    //        headers: { 'Authorization': 'Bearer ' + state.token }
    //     }).then((res) => {
    //        console.log(res.data);
    //        this.$router.put('/UserHome');
    //        commit('Update', res.data);
    //     })
    //  },
     async CreateTodo({ commit, state }, data) {
        await this.$axios.post("http://localhost:5000/api/todo", {
            decsription: data.decsription,
            iscompleted: data.iscompleted },
           { headers: { 'Authorization': 'Bearer ' + state.token }
        }).then((res) => {
           console.log(res.data)
           commit('CreateTodo', res.data);
        })
     },
    async updateTodo({ commit, state }, id) {
        await this.$axios.put("http://localhost:5000/api/todo/" + id, {
            is_completed: true
        },
           {
              headers: {
                 'Authorization': 'Bearer ' + state.token,
              }
           }).then((res) => {
              console.log('updates');
           })
     },
     async deleteTodo({ commit, state }, data) {
        await this.$axios.delete("http://localhost:5000/api/todo/" + data,
           {
              headers: {
                 'Authorization': 'Bearer ' + state.token,
              }
           }).then((res) => {
              console.log("Deleted");
           })
     },
  

  
 };
 
 export default {
    state,
    getters,
    mutations,
    actions,
 };