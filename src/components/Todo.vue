<template>
  <div class="ui centered card">
    <div class="content">
      <div class="header">
        {{ todo.title }}
      </div>
      <div class="meta">
        {{ todo.project }}
      </div>
      <div class="extra content">
        <span class="right floated edit icon">
          <i class="edit icon"/>
        </span>
      </div>
    </div>
    // form is visible when we are in editing mode
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
      v-show="todo.done"
      class="ui bottom attached green basic button">
      Completed
    </div>
    <div
      v-show="!todo.done"
      class="ui bottom attached red basic button">
      Complete
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  props: {
    todo: {
      type: Object,
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
    }
  }
}
</script>
