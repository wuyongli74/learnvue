<template>
  <div>
    <h2>Home页面</h2>
    <p>Home文字</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>

    <keep-alive>

      <router-view></router-view>

    </keep-alive>

  </div>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return {
        message: '你好啊',
        path: '/home/news'
      }
    },
    created() {
      console.log('created')
    },
    destroyed() {
      console.log('destroyed')
    },
    activated() {
      console.log('....');
      this.$router.push(this.path)
    },
    deactivated() {
      console.log(this.$route.path)
        this.path = this.$route.path;
    },
    mounted() {
      console.log('....');
      this.$router.push(this.path)
    },
    beforeRouteLeave(to, from, next) {
      console.log(this.$route.path)
      this.path = this.$route.path;
      next()
    }
  }
</script>

<style scoped>

</style>
