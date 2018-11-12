<template>
  <div class="ui basic content center aligned segment">
    <button
      v-show="!isCreating"
      class="ui basic button icon"
      @click="openForm">
      <i class="plus icon"/>
    </button>
    <div
      v-show="isCreating"
      class="ui centered card">
      <div class="content">
        <div class="ui form">
          <div class="field">
            <label>Title</label>
            <input
              v-model="titleText"
              type="text">
          </div>
          <div class="field">
            <label>Project</label>
            <input
              v-model="projectText"
              type="text">
          </div>
          <div class="ui two button attached buttons">
            <button
              class="ui basic blue button"
              @click="sendForm()">
              Create
            </button>
            <button
              class="ui basic red button"
              @click="closeForm">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      titleText: '',
      projectText: '',
      isCreating: false
    }
  },
  methods: {
    openForm () {
      this.isCreating = true
    },
    closeForm () {
      this.isCreating = false
    },
    sendForm () {
      if (this.titleText.length > 0 && this.projectText.length > 0) {
        const title = this.titleText
        const project = this.projectText
        this.$emit('create-todo', {
          title,
          project,
          done: false
        })
        this.titleText = ''
        this.projectText = ''
        this.isCreating = false
      }
    }
  }
}
</script>
