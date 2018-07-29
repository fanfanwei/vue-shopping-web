import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
export const store = new Vuex.Store({
  state:{
    /*设置属性*/
    menuPizza:[]
  },
  getters:{
    /*获取属性状态*/

  },
  mutations:{
    /*改变属性状态*/
    setMenuPizza(state,data){     //获取pizza数据
      state.menuPizza = data;
    },
    addMenuPizza(state,data){     //新增拍pizza数据
      state.menuPizza.push(data)
    },
    deleteMenuPizza(state,data){    //删除pizza数据
      state.menuPizza.forEach((item,index)=>{
        if (item.id = data){
          state.menuPizza.splice(index,1);
        }
      })
    }
  },
  actions:{
    /*应用mutations*/
  }
});
