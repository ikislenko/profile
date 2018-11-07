<template>
  <div>
    <!-- // JavaScript expressions in Vue are enclosed in double curly brackets. -->
    <p>Completed Tasks: {{ todos.filter(todo => {return todo.done === true}).length }}</p>
    <p>Pending Tasks: {{ todos.filter(todo => {return todo.done === false}).length }}</p>
    <div
      v-for="todo in todos"
      :key="todo.id"
      class="ui centered card">
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
</div></template>

<script type = "text/javascript" >
import Todo from './Todo.vue'

export default {
  components: { Todo },
  props: {
    todos: {
      type: Array,
      default: () => []
    }
  }
}
</script>
