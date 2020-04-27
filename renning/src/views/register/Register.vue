<template>
  <div class="Register">
    <form action="">
    	<input type="text" name="nickname" placeholder="请输入用户名" v-model="nickname">
    	<input type="password" name="prassword" placeholder="请输入密码" v-model="password">
    	<input type="password" name="prassword" placeholder="请重新确认输入密码">
    	<button @click="btnRegister(nickname, password,$event)">注册</button>
    </form>
    {{nickname}}
    <p>{{password}}</p>
  </div>
</template>

<script>
  // import { register } from 'network/register.js'
  export default {
    name: "Register",
    data(){
    	return {
    		nickname: '',
    		password: ''
    	}
    },
    methods: {
    	btnRegister(nickname, password,$event) {
    		$event.preventDefault()
    		// console.log(nickname,password)
              // type: 'success',
              //               message: '欢迎你,' + res.data.name + '!',
              //               duration: 3000
    		register(nickname,password).then(res => {console.log(res)})
    	}
    }
  }
</script>

<style scoped>
	.Register{padding-top: 50px;}
</style>