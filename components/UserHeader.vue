
<template>
<div class="content">
  <h1>TODO</h1>
  <div class="navigation">
    <ul>
      <li>
              <nuxt-link  aria-current="Home" to="/UserHome"
                >Home</nuxt-link
              >
            </li>
            <li>
              <nuxt-link to="/Createtodo">CreateTodo</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/AllTodos">AllTodos</nuxt-link>
            </li>

            <li>
              <nuxt-link to="/">LogOut</nuxt-link>
            </li>

    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: "UserHeader",
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
*{
  padding: 0; margin: 0;
  box-sizing: border-box;
  font-family: 'Bebas Neue', cursive;
  user-select: none;
}
a{
  text-decoration: none;
}
li{
  list-style: none;
}
.content{
  width: 100vw; height: 10vh;
  position: fixed;
  display: flex;
  align-items: center;
  background-color: black;
  z-index: 100;
  justify-content: space-evenly;
  color: white;
  box-shadow: 0 0 10px rgba(0,0,0,0.9);
}
h1{
  letter-spacing: 5px;
  font-size: 40px;
  cursor: pointer;
}
.navigation ul{
  display: flex;
  justify-content: space-evenly;
  width: 40vw;
}
a{
  color: white;
  font-size: 20px;
  transition: 0.5s linear;
}
a:hover{
  letter-spacing: 2px;
}

@media only screen and (max-width: 700px){
  .content{
    flex-direction: column;
    height: auto;
  }
  .navigation ul{
    width: 100vw;
  }
}

</style>