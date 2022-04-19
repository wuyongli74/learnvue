import Vue from 'vue'
import Vuex from 'vuex'
import {INCREMENT} from "./mutations-type";

// 1.安装插件
Vue.use(Vuex)

const moduleA = {
  state: {
    name: 'LiLy'
  },
  mutations: {
    updateName(state, payload) {
      state.name = payload
    }
  },
  actions: {
    aUpdateName(context){
       context.commit('updateName','BOb')
    }
  },
  getters: {
    fullname(state) {
      return state.name + '11'
    },
    fullname2(state,getters) {
      return getters.fullname + '22'
    },
    fullname3(state,getters,rootState){
      return getters.fullname2 + rootState.counter
    }
  }
}

// 2.创建对象
const store = new Vuex.Store({
  state: {
    counter: 1000,
    students: [
      {id: 110, name: 'nok', age: 23},
      {id: 111, name: 'loLy', age: 34},
      {id: 112, name: 'Boi', age: 14},
      {id: 113, name: 'KOkd', age: 25},
    ],
    info: {
      name: 'kobe',
      age: 34,
      height: 1.97
    }
  },
  mutations: {
    // 方法
    [INCREMENT](state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    incrementCount(state, payload) {
      state.counter += payload.count
      console.log(payload.count)
    },
    addStudent(state, stu) {
      state.students.push(stu)
    },
    updateInfo(state) {
      state.info.name = 'why'
      // 错误代码
      // setTimeout(() => {
      //   state.info.name = 'why'
      // }, 1000)

      // state.info['address'] = '洛杉矶'

      // Vue.set(state.info,'address','洛杉矶')
      // 该方式做不到响应式
      // delete state.info.age

      // Vue.delete(state.info,'age')
    }
  },
  actions: {
    // context 上下文
    // aUpdateInfo(context,payload){
    //   setTimeout(()=>{
    //     context.commit('updateInfo')
    //     console.log(payload.message)
    //     payload.success()
    //   },1000)
    // }
    aUpdateInfo(context, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('updateInfo')
          console.log(payload)
          resolve('222')
        }, 1000)
      })
    }
  },
  getters: {
    powerCounter(state) {
      return state.counter * state.counter
    },
    more20stu(state) {
      return state.students.filter(s => s.age >= 25)
    },
    more20stuLength(state, getters) {
      return getters.more20stu.length
    },
    moreAgeStu(state) {
      // return function (age) {
      //   return state.students.filter(s=>s.age > age)
      // }

      //简写 -> 不推荐
      return age => {
        return state.students.filter(s => s.age > age)
      }
    }
  },
  modules: {
    a: moduleA,
  }
});

// 3.导出store独享
export default store
