<template>
    <div>
      <h2>My Todos</h2>
    <div v-if="todos.length">
      <div class="todo" v-for="todo in todos" v-bind:key="todo.id">
        <p><a href="#" class="delete" @click.prevent="markComplete(todo.id)">✓</a> {{todo.message}}</p>
        <p class="date">created: {{formateDate(todo.created_at)}}</p>
        
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
  computed: {
    todos(){
      return this.$store.state.todos;
    }
  },
  methods: {
    formateDate(date){
      let d = new Date(0)
      d.setUTCSeconds(date)
      return d.toLocaleString()
    },
    markComplete(id){
      console.log(id)
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