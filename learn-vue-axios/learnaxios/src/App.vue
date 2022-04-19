<template>
  <div id="app">
    <div>{{results}}</div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'App',
    components: {},
    data() {
      return {
        results: '',
      }
    },
    created() {
      axios({
        url: 'http://123.207.32.32:8000/home/multidata'
      }).then(res => {
        // console.log(res);
        this.results = res.data.data.banner.list;
      })
    }
  }
</script>

<style>
</style>
