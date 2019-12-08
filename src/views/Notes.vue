<template>
  <div class="grid">
    <div class="notes-component">
      
      <addNotes />
    </div>
    <div class="notes-view">
      <notesView />
    </div>

    <div class="checklist-view">
      <todoView />
    </div>
  </div>
</template>

<script>
import addNotes from '@/components/addNotes.vue'
import notesView from '@/components/notesView.vue'
import todoView from '@/components/todosView.vue'

export default {
  name: 'notes',
  components: {
    addNotes,
    notesView,
    todoView
  }
  
}
</script>

<style scoped>
.grid{
  display: grid;
  grid-template-areas: "note-add note-add" "checklist notes";
  min-height: 100vh;
  grid-auto-rows: 50%;
  margin: 0 8%;

}

.notes-component{
  grid-area: note-add;
  margin-bottom: 40px;
}

.notes-view{
  grid-area: notes;
  padding: 0 10px;
}

.checklist-view{
  grid-area: checklist;
  border-right: 1px dashed #cccccc;
  padding: 0 10px;
}
</style>