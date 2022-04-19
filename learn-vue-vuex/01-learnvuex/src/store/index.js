import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import moduleA from "./modules/moduleA";

// 1.安装插件
Vue.use(Vuex)

// 2.创建对象
const state = {
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
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules:{a:moduleA}
});

// 3.导出store独享
export default store
