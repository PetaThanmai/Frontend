<template> 
  <div>
    <div class="container">
	<div class="screen">
		<div class="screen__content">
			<form class="login" @submit.prevent="login">
				<div class="login__field">
					<i class="login__icon fas fa-user"></i>
					<input v-model="formData.username" type="text" class="login__input" placeholder="username">
				</div>
				<div class="login__field">
					<i class="login__icon fas fa-lock"></i>
					<input v-model="formData.password" type="password" class="login__input" placeholder="password">
				</div>
				<button class="button login__submit">
					<span class="button__text">Log In Now</span>
					<i class="button__icon fas fa-chevron-right"></i>
				</button>				
			</form>
			<div class="social-login">
				<h3>log in via</h3>
				<div class="social-icons">
					<a href="#" class="social-login__icon fab fa-instagram"></a>
					<a href="#" class="social-login__icon fab fa-facebook"></a>
					<a href="#" class="social-login__icon fab fa-twitter"></a>
				</div>
			</div>
		</div>
		<div class="screen__background">
			<span class="screen__background__shape screen__background__shape4"></span>
			<span class="screen__background__shape screen__background__shape3"></span>		
			<span class="screen__background__shape screen__background__shape2"></span>
			<span class="screen__background__shape screen__background__shape1"></span>
  
		</div>		
	</div>
</div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
      formData: {
        username: this.username,
        password: this.password,
      },
    };
  },
  methods: {
    login() {
      console.log(this.formData.username);
      console.log(this.formData.password);
      this.$store.dispatch("login", this.formData);
      this.$router.push({ path: "/UserHome" });
    },
  },
  head() {
    return {
      title: "login page",
      meta: [
        {
          hid: "loginpage",
          name: "loginpage",
          content: "user can log in here",
        },
      ],
    };
  },

};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Raleway:400,700');

* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;	
	font-family: Raleway, sans-serif;
}

body {
	background: linear-gradient(90deg, #C7C5F4, #131319);		
}

.container {
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 30vh;
}

.screen {		
	background: linear-gradient(90deg, #1b1a21, #24242c);		
	position: relative;	
	height: 600px;
	width: 400px;	
	box-shadow: 0px 0px 24px #15141a;
}

.screen__content {
	z-index: 1;
	position: relative;	
	height: 100%;
}

.screen__background {		
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 0;
	-webkit-clip-path: inset(0 0 0 0);
	clip-path: inset(0 0 0 0);	
}

.screen__background__shape {
	transform: rotate(45deg);
	position: absolute;
}

.screen__background__shape1 {
	height: 520px;
	width: 520px;
	background: #FFF;	
	top: -50px;
	right: 120px;	
	border-radius: 0 72px 0 0;
}

.screen__background__shape2 {
	height: 220px;
	width: 220px;
	background: #1f1e25;	
	top: -172px;
	right: 0;	
	border-radius: 32px;
}

.screen__background__shape3 {
	height: 540px;
	width: 190px;
	background: linear-gradient(270deg, #1b1a20, #21212b);
	top: -24px;
	right: 0;	
	border-radius: 32px;
}

.screen__background__shape4 {
	height: 400px;
	width: 200px;
	background: #212128;	
	top: 420px;
	right: 50px;	
	border-radius: 60px;
}

.login {
	width: 320px;
	padding: 30px;
	padding-top: 156px;
}

.login__field {
	padding: 20px 0px;	
	position: relative;	
}

.login__icon {
	position: absolute;
	top: 30px;
	color: #222128;
}

.login__input {
	border: none;
	border-bottom: 2px solid #D1D1D4;
	background: none;
	padding: 10px;
	padding-left: 24px;
	font-weight: 700;
	width: 75%;
	transition: .3s;
}

.login__input:active,
.login__input:focus,
.login__input:hover {
	outline: none;
	border-bottom-color: #1a1a1f;
}

.login__submit {
	background: #fff;
	font-size: 14px;
	margin-top: 30px;
	padding: 16px 20px;
	border-radius: 26px;
	border: 1px solid #D4D3E8;
	text-transform: uppercase;
	font-weight: 700;
	display: flex;
	align-items: center;
	width: 100%;
	color: #222229;
	box-shadow: 0px 2px 2px #292831;
	cursor: pointer;
	transition: .2s;
}

.login__submit:active,
.login__submit:focus,
.login__submit:hover {
	border-color: #25252f;
	outline: none;
}

.button__icon {
	font-size: 24px;
	margin-left: auto;
	color: #17171d;
}

.social-login {	
	position: absolute;
	height: 140px;
	width: 160px;
	text-align: center;
	bottom: 0px;
	right: 0px;
	color: #fff;
}

.social-icons {
	display: flex;
	align-items: center;
	justify-content: center;
}

.social-login__icon {
	padding: 20px 10px;
	color: #fff;
	text-decoration: none;	
	text-shadow: 0px 0px 8px #292930;
}

.social-login__icon:hover {
	transform: scale(1.5);	
}
</style>