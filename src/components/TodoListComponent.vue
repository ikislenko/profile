<template>
  <div>
    <p>Completed Tasks: {{ todos.filter(todo => {return todo.done === true}).length }}</p>
    <p>Pending Tasks: {{ todos.filter(todo => {return todo.done === false}).length }}</p>
    <todo
      v-for="todo in todos"
      :key="todo.id"
      :todo.sync="todo"
      @complete-todo="completeTodo"
      @delete-todo="deleteTodo"/>
</div></template>

<script type = "text/javascript" >
import sweetalert from 'sweetalert'
import Todo from './Todo.vue'

export default {
  components: { Todo },
  props: {
    todos: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  methods: {
    deleteTodo (todo) {
      const todoIndex = this.todos.indexOf(todo)
      this.todos.splice(todoIndex, 1)
      sweetalert('Deleted!', 'Your To-Do has been deleted.', 'success')
    },
    completeTodo (todo) {
      const todoIndex = this.todos.indexOf(todo)
      this.todos[todoIndex].done = true
      sweetalert('Success!', 'To-Do completed!', 'success')
    }
  }
}
</script>
