<template>
  <section class="todoapp" v-cloak>
    <Header @addTodoEvent="addTodoEvent"></Header>
    <TodoList :todos="todos" :visibility="visibility"  @removeTodoEvent="removeTodoEvent"></TodoList>
    <Footer :visibility="visibility" :todos="todos" @changeVisibilityEvent="changeVisibilityEvent" @clearCompletedEvent="clearCompletedEvent"></Footer>
  </section>
</template>

<script>
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
export default {
  name: "App",
  data() {
    return {
      todoIdx: 1,
      todos: [],
      visibility: "all"
    };
  },

  components: {
    Header,
    TodoList,
    Footer
  },
  methods: {
    addTodoEvent(title) {
      if (!title) {
        return;
      }
      this.todos.push({ id: this.todoIdx++, title, completed: false });
    },
    changeVisibilityEvent(type) {
      this.visibility = type;
    },
    removeTodoEvent(todo) {
      let idx = this.todos.findIndex(element => element == todo);
      this.todos.splice(idx, 1);
    },
    clearCompletedEvent() {
      this.todos = this.todos.filter(todo => !todo.completed);
    }
  }
};
</script>
<style>
</style>
