<template>
  <div>
    <h2>用户界面</h2>
    <p>相关用户信息</p>
    <h2>{{userId}}</h2>
    <h2>{{$route.params.id}}</h2>
  </div>
</template>

<script>
  export default {
    name: "User",
    computed: {
      userId() {
        return this.$route.params.id
      }
    },
    created() {
      console.log('User created')
    },
    destroyed() {
      console.log('User destroyed')
    },
  }
</script>

<style scoped>

</style>
