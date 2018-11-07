<template>
  <div>
    <todo-list-component :todos="todos"/>
  </div>
</template>

<script>
import TodoListComponent from './components/TodoListComponent.vue'
// import HelloComponent from './components/HelloComponent.vue'

export default {
  components: {
    TodoListComponent
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
  }
}
</script>
