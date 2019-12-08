<template>
    <div>
      <h2>My Notes</h2>
    <div v-if="notes.length">
      <div class="note" v-for="note in notes" v-bind:key="note.id">
        {{note.message}}
        <p class="date">created: {{formateDate(note.created_at)}}</p>
      </div>
    </div>  
    <div v-else>
      <p>There are no notes. </p>
      
    </div>
    </div> <!-- main div -->
</template>

<script>

export default {
  name: "notes-view",
  computed: {
    notes(){
      return this.$store.state.notes;
    }
  },
  methods: {
    formateDate(date){
      let d = new Date(0)
      d.setUTCSeconds(date)
      return d.toLocaleString()
    }
  }
}
</script>

<style scoped>
.note{
  border-bottom: 1px dashed #cccccc;
  padding-bottom: 10px;
  text-align: left;
  white-space:pre-line;
  
  
  
}
.todo > p{
}

.note > p.date {
  font-size: 10px;
}


</style>