<template>
  <div>
    <h1 class="ui dividing centered header">Vue.js Todo App</h1>
    <div class="ui three column centered grid">
      <todo-list-component :todos="todos"/>
    </div>
    <create-todo @create-todo="createTodo"/>
</div></template>

<script>
import sweetalert from 'sweetalert'
import TodoListComponent from './components/TodoListComponent.vue'
import CreateTodo from './components/CreateTodo.vue'
// import HelloComponent from './components/HelloComponent.vue'

export default {
  components: {
    TodoListComponent,
    CreateTodo
  }, // data function avails data to the template
  data () {
    return {
      todos: [
        {
          title: 'Todo A',
          project: 'Project A',
          done: false,
          id: 1
        },
        {
          title: 'Todo B',
          project: 'Project B',
          done: true,
          id: 2
        },
        {
          title: 'Todo C',
          project: 'Project C',
          done: false,
          id: 3
        },
        {
          title: 'Todo D',
          project: 'Project D',
          done: false,
          id: 4
        }
      ]
    }
  },
  // App.vue
  methods: {
    createTodo (newTodo) {
      this.todos.push(newTodo)
      sweetalert('Success!', 'To-Do created!', 'success')
    },
    sayHello () {
      sweetalert('Success!', 'Hello!', 'success')
    }
  }
}
</script>
