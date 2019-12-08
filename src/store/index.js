import Vue from 'vue'
import Vuex from 'vuex'
import { addTodo } from '@/api.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    notes: [],
    todos: []
  },
  mutations: {
    note_add(state, note){
      state.notes.push(note)
    },

    todo_add(state, todo){
      state.todos.push(todo)
    }
  },
  actions: {
    async add({ commit }, data){
      //TODO: Add localstorage in future.
      let item = await addTodo(data)
      let commit_name = (item.type === "note") ? "note_add" : "todo_add"
      commit(commit_name,item)

    }
  },
  modules: {
  }
})
