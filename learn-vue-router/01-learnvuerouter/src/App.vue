<template>
  <div id="app">
    <!--    <router-link to="/home" tag="button" replace active-class="active">首页</router-link>-->
    <!--    <router-link to="/about" tag="button"  replace active-class="active">关于</router-link>-->

    <!--    <router-link to="/home" tag="button" replace >首页</router-link>-->
    <!--    <router-link to="/about" tag="button"  replace >关于</router-link>-->

    <!--    <button @click="homeClick">首页</button>-->
    <!--    <button @click="aboutClick">关于</button>-->

    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link v-bind:to="'/user/'+userId">用户</router-link>
    <!-- <router-link to="/profile">简介</router-link> -->
    <!-- url:协议://主机:端口/路径?查询(query) -->
    <!-- scheme://host:port/path?query-->
    <router-link :to="{path:'/profile',query:{name:'why',age:23}}">简介</router-link>


    <button @click="userClick">用户</button>
    <button @click="profileClick">简介</button>


    <img :src="imgURL"/>

    <!-- 相当于占位的关系-->
    <keep-alive exclude="Profile">
      <router-view></router-view>
    </keep-alive>


    <hr/>
    <button @click="routerClick">按钮router</button>
    <button v-on:click="routerClick">按钮router</button>
    <hr/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        userId: 'his',
        imgURL: 'http://www.baidu.com/login.png'
      }
    },
    methods: {
      homeClick() {
        // 通过代码的方式修改路径 vue-router
        // push => pushState
        // this.$router.push('/home')
        this.$router.replace('/home')
        console.log('home')
      },
      aboutClick() {
        // this.$router.push('/about')
        this.$router.replace('/about')
        console.log('about')
      },
      userClick() {
        this.$router.push('/user/' + this.userId)
      },
      profileClick() {
        this.$router.push({
          path: '/profile',
          query: {
            name: 'kobo',
            age: 23,
            height: 1.45
          }
        })
      },
      routerClick(){
        // 所有的组件都继承自Vue类的原型
        // console.log(this.$router)
        // console.log(this.$route)
      }
    }
  }
</script>

<style>
  .router-link-active {
    /*color: #ff0000;*/
  }

  .active {
    color: #ff0000;
  }
</style>
