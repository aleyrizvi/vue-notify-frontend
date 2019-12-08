import Vue from 'vue'
import Vuex from 'vuex'
import { addTodo, populateData } from '@/api.js'

Vue.use(Vuex)



const store = new Vuex.Store({
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
    },
    note_setInitial(state, notes){
      state.notes.push(...notes)
    },
    todos_setInitial(state, todos){
      state.todos.push(...todos)
    }
  },
  actions: {
    async add({ commit }, data){
      //TODO: Add localstorage in future.
      let item = await addTodo(data)
      let commit_name = (item.type === "note") ? "note_add" : "todo_add"
      commit(commit_name,item)

    },
    async INITIALISE({ commit }){
      console.log("inside initalise", commit)
      let data = await populateData()
      let notes = data.filter(item => item.type === "note")
      let todos = data.filter(item => item.type === "todo")

      commit('note_setInitial', notes)
      commit('todos_setInitial', todos)
    }
  },
  modules: {
  }
})

// store.subscribe((mutation, state) => {
  
//     /*
//     TODO:
//     - set Localstorage
//     - use modules and namespacing
//     - call initialise on all modules and namespacing
//     - fetch Localstorage and prefilled state
//     */
// })

store.dispatch('INITIALISE')

export default store