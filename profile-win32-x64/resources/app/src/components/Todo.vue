<template>
  <div class="ui centered card">
    <div
      v-show="!isEditing"
      class="content">
      <div class="header">
        {{ todo.title }}
      </div>
      <div class="meta">
        {{ todo.project }}
      </div>
      <div class="extra content">
        <span
          class="right floated edit icon"
          @click="showForm">
          <i class="edit icon"/>
        </span>
        <span
          class="right floated trash icon"
          @click="deleteTodo(todo)">
          <i class="trash icon"/>
        </span>
      </div>

    </div>
    <div
      v-show="isEditing"
      class="content">
      <div class="ui form">
        <div class="field">
          <label>Title</label>
          <input
            v-model="todo.title"
            type="text" >
        </div>
        <div class="field">
          <label>Project</label>
          <input
            v-model="todo.project"
            type="text" >
        </div>
        <div class="ui two button attached buttons">
          <button
            class="ui basic blue button"
            @click="hideForm">
            Close X
          </button>
        </div>
      </div>
    </div>
    <div
      v-show="!isEditing &&todo.done"
      class="ui bottom attached green basic button"
      disabled>
      Completed
    </div>
    <div
      v-show="!isEditing && !todo.done"
      class="ui bottom attached red basic button"
      @click ="completeTodo(todo)">
      Pending
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  props: {
    todo: {
      type: Object,
      required: true,
      default: () => {}
    }
  },
  data () {
    return {
      isEditing: false
    }
  },
  methods: {
    showForm () {
      this.isEditing = true
    },
    hideForm () {
      this.isEditing = false
    },
    deleteTodo (todo) {
      this.$emit('delete-todo', todo)
    },
    completeTodo (todo) {
      this.$emit('complete-todo', todo)
    }
  }
}
</script>
