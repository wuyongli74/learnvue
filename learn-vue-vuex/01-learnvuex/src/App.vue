<template>
  <div id="app">
    <h2>---App内容：modules中的内容---</h2>
    <h2>{{$store.state.a.name}}</h2>
    <button @click="updateName">修改名字</button>
    <h2>{{$store.getters.fullname}}</h2>
    <h2>{{$store.getters.fullname2}}</h2>
    <h2>{{$store.getters.fullname3}}</h2>
    <button @click="asyncUpdateName">异步修改名字</button>

    <h2>---App内容---</h2>
    <h2>{{$store.state.counter}}</h2>
    <h2>{{$store.state.students}}</h2>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">添加学生</button>

    <div>
      <h2>---App内容:getters相关信息---</h2>
      <h2>{{$store.getters.powerCounter}}</h2>
      <h2>{{$store.getters.more20stu}}</h2>
      <h2>{{$store.getters.more20stuLength}}</h2>
      <h2>{{$store.getters.moreAgeStu(25)}}</h2>

      <h2>---App内容：info对象的内容是否是响应式---</h2>
      <h2>{{$store.state.info}}</h2>
      <button @click="infoClick">修改</button>
    </div>

    <h2>---Hello Vuex内容---</h2>
    <hello-vuex/>


  </div>
</template>

<script>
  import HelloVuex from "./components/HelloVuex";
  import {INCREMENT} from "./store/mutations-type";

  export default {
    name: 'App',
    components: {
      HelloVuex
    },
    data() {
      return {
        message: 'App组件',
      }
    },
    methods: {
      addition() {
        this.$store.commit(INCREMENT)
      },
      subtraction() {
        this.$store.commit('decrement')
      },
      addCount(count) {
        // payload：负载
        // 1.普通的提交封装
        // this.$store.commit('incrementCount', count)

        // 2.特殊的提交封装
        this.$store.commit({
          type: 'incrementCount',
          count,
        })
      },
      addStudent() {
        const stu = {id: 114, name: 'AlLy', age: 29}
        this.$store.commit('addStudent', stu)
      },
      infoClick() {
        // this.$store.commit('updateInfo')
        // this.$store.dispatch('aUpdateInfo',{
        //   message:'携带信息',
        //   success:()=>{
        //     console.log('完成')
        //   }
        // })

        this.$store.dispatch('aUpdateInfo', '携带信息').then(res => {
          console.log(res)
          console.log('完成')
        })
      },
      updateName() {
        this.$store.commit('updateName', 'opop')
      },
      asyncUpdateName() {
        this.$store.dispatch('aUpdateName')
      }
    }
  }
</script>

<style>

</style>
