<template>
  <div v-if="view">
    <h2>Add a new note</h2>
    <p><textarea ref="addNoteField" v-model="message" /></p>
    <a href="#" @click="add" class="btn">Add a note </a> | 
    <a href="#" @click="switchView">Add todo instead?</a>
  </div>
  <div v-else>
    <h2>Add a new todo</h2>
    <p><input type=text v-model="message" /></p>
    <a href="#" @click="add" class="btn">Add todo</a> | 
    <a href="#" @click="switchView" >Add a note instead?</a>
  </div>
  
</template>

<script>
export default {
  name: "add-notes",
  data: function(){
    return {
      view: 1,
      message: ''
    }
  },
  methods: {
    switchView(){
      this.message=""
      this.view = !this.view
    },
    add(){
      let type = (this.view) ? 'note' : 'todo' 
      this.$store.dispatch('add', {
        message: this.message,
        type: type
      })
      this.message=""
    }
  }
}
</script>

<style scoped>
textarea{
  width: 500px;
  height: 50px;
}

input[type=text]{
  width: 500px;
  height: 20px;
  padding: 5px 5px;
  border-radius: 5px;
  border: 1px solid #cccccc; 
  margin-bottom: 10px;
}

.btn {
  background: #ffbc32;
  text-decoration: none;
  color: white;
  box-shadow: 0 5px 0 0 #c78f27;
  border-radius: 10px;
  padding: 5px 10px;
  margin-right: 10px;
}
</style>