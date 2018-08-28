<template>
  <section class="main" v-show="todos.length" >
      <input id="toggle-all" class="toggle-all" type="checkbox" v-model="allDone">
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        <Todo v-for="todo in filterTodos" :todo="todo" :key="todo.id" @updateTodoTitleEvent="updateTodoTitleEvent"></Todo>
      </ul>
    </section>
</template>
<script>
import filters from "../assets/js/filters.js";
import Todo from "./Todo";
export default {
  name: "TodoList",
  components: {
    Todo
  },
  props: {
    todos: Array,
    visibility: String
  },
  computed: {
    allDone: {
      get() {
        return this.todos.every(todo => todo.completed);
      },
      set(completed) {
        this.todos.forEach(todo => {
          todo.completed = completed;
        });
      }
    },
    filterTodos() {
      return filters[this.visibility](this.todos);
    }
  },
  methods: {
    updateTodoTitleEvent(id,title){
      console.log('todolist');
      console.log(id,title);
      this.$emit('updateTodoTitleEvent', id,title)
    }
  }
};
</script>