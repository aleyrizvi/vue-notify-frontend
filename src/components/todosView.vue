<template>
    <div>
      <h2>My Todos (<a href="#" @click.prevent="filterTodo">{{showFilter}}</a>)</h2>
    <div v-if="todos.length">
      <div class="todo" v-for="todo in todos" v-bind:key="todo.id">
        <p><a href="#" class="delete" @click.prevent="markComplete(todo.ID)">✓</a> {{todo.message}}</p>
        <p class="date">created: {{formateDate(todo.created_at)}} | status: {{status(todo.completed)}}</p>
        
      </div>
    </div>  
    <div v-else>
      <p>There are no todo in checklist. </p>

      
    </div>
    </div> <!-- main div -->
</template>

<script>

export default {
  name:"todos-view",
  data: function(){
    return {
      showAll: false,
      showFilter: "Open"
    }
  },
  computed: {
    todos(){
      return this.$store.state.todos
              .filter (todo => this.showAll ? true : !todo.completed)
    }
  },
  methods: {
    filterTodo(){
      this.showAll = !this.showAll
      this.showFilter = this.showAll ? "All" : "Open"
    },
    formateDate(date){
      let d = new Date(0)
      d.setUTCSeconds(date)
      return d.toLocaleString()
    },
    markComplete(id){
      this.$store.dispatch('complete_todo', id)
    },
    status(status){
      return (status) ? "Completed" : "Open"
    }
  }
}
</script>

<style scoped>
.todo{
  border-bottom: 1px dashed #cccccc;
  padding-bottom: 10px;
  text-align: left;
  
  
}
.todo > p{
}

.todo > p.date {
  font-size: 10px;
}


</style>