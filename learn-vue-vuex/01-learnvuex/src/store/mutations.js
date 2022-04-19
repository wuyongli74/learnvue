import {INCREMENT} from "./mutations-type";

export default {
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
}
