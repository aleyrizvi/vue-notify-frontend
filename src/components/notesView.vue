<template>
    <div>
      <h2>My Notes</h2>
    <div v-if="notes.length">
      <div v-for="note in notes" v-bind:key="note.id">
        {{note.message}}
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
  }
}
</script>

<style scoped>


</style>