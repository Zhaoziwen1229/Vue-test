<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
        <button @click="goBack">后退</button>
        <button @click="goForwad">前进</button>
        <button @click="goHome">返回首页</button>
    </div>
    <div>
      <router-link to="/">首页</router-link>|
      <router-link to="/hi">hi</router-link>|
      <router-link to="/splice">splice</router-link>|
      <router-link to="/params/158/sdfbg">params</router-link>|
      <router-link :to="{name:'hi1',params:{username:'zzw',id:'888'}}">hi1页面</router-link>|
      <router-link :to="{name:'hi2',params:{username:'zzw',id:'999'}}">hi2页面</router-link>|
      <router-link to="/gohome">回到首页</router-link>|
      <router-link to="/goParams/198/asdfgb">goParams</router-link>|
      <router-link to="/ssd">ssd</router-link>
    </div>
    <p>{{$route.name}}</p>
    <transition name="fade" mode="out-in">
      <router-view/>
    
    </transition>
      <router-view name="left" style="float:left;width:50%;height:200px;background:red;color:#fff;"/>
      <router-view name="right" style="float:left;width:50%;height:200px;background:blue;color:#fff;"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    goBack(){
      this.$router.go(-1)
    },
    goForwad(){
      this.$router.go(1)
    },
    goHome(){
      this.$router.push("/")
    }
  }
}
</script>

<style>
@import './assets/css/public.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter{
  opacity: 0;
}
.fade-leave{
  opacity: 1;
}
.fade-enter-active{
  transition: opacity 0.5s;
}
.fade-leave-active{
  opacity: 0;
  transition:   opacity 0.5s;
}
</style>
