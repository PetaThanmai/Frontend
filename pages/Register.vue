<template>
  <div>
    <div class="container">
    <div class="content">
       <img src="https://res.cloudinary.com/debbsefe/image/upload/f_auto,c_fill,dpr_auto,e_grayscale/image_fz7n7w.webp" alt="header-image" class="cld-responsive">
            <h1 class="form-title">Register Here</h1>
            <form @submit.prevent="submit">
               <input v-model="name" type="text" placeholder="NAME">
            <!-- <div class="beside">
                <input type="number" placeholder="PHONE NUMBER">
                <select>
                    <option>GENDER</option>
                    <option>MALE</option>
                    <option>FEMALE</option>
                    <option>NON-BINARY</option>
                </select>
            </div> -->
                <input v-model="email" type="email" placeholder="EMAIL ADDRESS">
                <input v-model="password" type="text" placeholder="PASSWORD"><br>
                <button type="button">Submit</button>
            </form>
        </div>
 </div>

  </div>
</template>

<script>
export default {
  name: "register",
  data() {
    return{
      name:'',
      email:'',
      password:''

    }
  },
  methods:{
   async  submit() {
     await axios(input,'http://localhost:58063/register',init,{
       method:'POST',
       headers:{'Content-Type':'application/json'},
        body:JSON.stringify(value,{
         name:this.name,
         email:this.email,
         password:this.password

        })
     });
     await this.$router.push('/login');

    }
  }
};
</script>

<style scoped>
html, body{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color:#008cba; 
    height:100%;
}
.container{ 
   height:100%;
   display:flex;
   align-items:center;
   justify-content:center;
}
.content{
    background-color:white;
    width:500px;
    height:500px;
}
img{
    width: 100%;
    height: 45%;
}
.form-title{
    padding:10px 40px 0px;
}
form{
    padding:0px 40px;
}
input[type=text], [type=email]{
    border: none;
    border-bottom: 1px solid black;
    outline:none;
    width:100%;
    margin: 8px 0;
    padding:10px 0;
}
input[type=number]{
    border: none;
    border-bottom: 1px solid black;
    outline:none;
    margin: 8px 0;
    padding:5px 0;
}
input :hover {
    background-color: red;
}
select{
    border: none;
    border-bottom: 1px solid black;
    outline:none;
    margin: 8px 0;
    padding:5px 0;
    width:50%;
}
.beside{
    display:flex;  
    justify-content: space-between;
}
button{
    color:#ffffff;
    background-color: #161d16;
    height:40px;
    width:35%;
    margin-top:55px;
    cursor: pointer;
    border:none;
    border-radius:10%;
    outline:none;
    text-align:center;
    font-size:16px;
    text-decoration:none;
    -webkit-transition-duration:0.4s;
    transition-duration:0.4s;
}
button:hover{
    background-color:#333333;
}
</style>