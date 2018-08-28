<template>
  <section class="todoapp" v-cloak>
    <Header @addTodoEvent="addTodoEvent"></Header>
  </section>
</template>

<script>
import Header from "./components/Header";

export default {
  name: "App",
  data() {
    return {
      todoIdx: 1,
      todos: [],
      editingTodo: null,
      visibility: "all"
    };
  },

  components: {
    Header
  },
  methods: {
    addTodoEvent(title) {
      if (!title) {
        return;
      }
      this.todos.push({ id: this.todoIdx++, title, completed: false });
    }
  }
};
</script>
<style>
</style>
