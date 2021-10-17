<template>
<div id="login"> 
  <div id="image">
    <img id="booklb" src="../assets/booklb.jpg" alt="">
  </div>
  <div id="login_main">
    <div id="login_content">
      <p id="big_p">
        用户登录
      </p>
      <div id="login_user">
        <p class="login_p">用户名：</p>
        <input type="text" id="user_input" v-model="user">
      </div>
      <div id="login_pass">
        <p class="login_p">密码：</p>
        <input type="password" id="pass_input" v-model="password">
      </div>
      <button id="login_bt" @click="login()">
        登录
      </button>
    </div>
  </div>
</div>

                
</template>

<script>
export default {
  name: 'login',
  props: {
    msg: String
  },
  data() {
    return{
      user:'',
      password:''
    };
  },
  methods:{
    login(){
      // if (this.password==''&&this.user==''){
      //   this.$router.push('/')
      // }
      if (this.password=='user'&&this.user=='user'){
        this.$router.push('user')
      }
      else if (this.password=='manager'&&this.user=='manager'){
        this.$router.push('manager')
      }
    }
  }
}
</script>
<style scoped>
#login{
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#image{
  background-color: #219812;
  float: left;
  height: 400px;
  width: 500px;
  margin-top: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#booklb{
  height: 400px;
  width: 500px;
}
#login_main{
  background-color: #dde2df;
  float: left;
  height: 400px;
  width: 400px;
  margin-top: 120px;
}
#login_content{
  margin-top: 80px;
  margin-left: 60px;
}
#login_user{
  font-weight: bold;
  display: flex;
  margin-top: 12px;
}
#login_pass{
  font-weight: bold;
  display: flex;
  margin-top: 12px;
}
#user_input{
  height: 35px;
  width: 200px;
  /* outline-style: none ;  */
  border: 1px solid #ccc; 
  border-radius: 3px;
}
#pass_input{
  margin-left: 14px;
  height: 35px;
  width: 200px;
  /* outline-style: none ;  */
  border: 1px solid #ccc; 
  border-radius: 3px;
}
#login_bt{
  display: flex;
  margin-left: 55px;
  margin-top: 12px;
  font-weight: bolder;
  width: 100px;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 3px;
}
#login_bt:active {
  transform: translateY(2px);
}
.login_p{
  margin-top: 10px;
}
#big_p{
  font-size: 24px;
  font-weight: bolder;
  display: flex;
  margin-left: 100px;
}
</style>
