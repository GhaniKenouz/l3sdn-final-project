import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    manages: [
      { nom: 'Directeur Général', age: 35, prenom: 'John', salaire: 50000, adresse: '123 Rue Principale', telephone: '0123456789', employed: true },
      { nom: 'Commercial', age: 40, prenom: 'Alice', salaire: 40000, adresse: '456 Avenue Secondaire', telephone: '9876543210', employed: false },
      { nom: 'Chef de projet', age: 32, prenom: 'Bob', salaire: 45000, adresse: '789 Boulevard Tertiaire', telephone: '1122334455', employed: true }
    ]
  },
  mutations: {
    addManage(state, manage) {
      state.manages.push(manage)
    },
    updateManage(state, { index, manage }) {
      state.manages.splice(index, 1, manage)
    },
    deleteManage(state, index) {
      state.manages.splice(index, 1)
    }
  },
  actions: {
    addManage({ commit }, manage) {
      commit('addManage', manage)
    },
    updateManage({ commit }, payload) {
      commit('updateManage', payload)
    },
    deleteManage({ commit }, index) {
      commit('deleteManage', index)
    }
  },
  getters: {
    getManages: state => state.manages
  }
})
