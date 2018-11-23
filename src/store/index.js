import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city:'深圳',
    cityID:30,
  },
  mutations: {
    setCity(state,value){
      state.city = value;
      console.log(state)
    },
    setCityID(state,value){
      state.cityID = value;
    },
  },
  actions: {
    modifyCityAction(context,params){
      console.log(params)
      context.commit('setCity', params.city);
      context.commit('setCityID', params.cityID);
    }
  }
})
