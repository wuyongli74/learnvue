<template>
  <div>
    <h2>../components/Profile</h2>
    <h2>{{$route.query.name}}</h2>
    <h2>{{$route.query.age}}</h2>
  </div>
</template>

<script>
  export default {
    name: "Profile",
    created() {
      console.log('Profile created')
    },
    destroyed() {
      console.log('Profile destroyed')
    },
  }
</script>

<style scoped>

</style>
