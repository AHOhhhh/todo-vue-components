<template>
  <header class="header">
      <h1>todos</h1>
      <input class="new-todo" autofocus autocomplete="off" placeholder="What needs to be done?" v-model.trim="newTodo" @keyup.enter="addTodo">
  </header>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      newTodo: ""
    };
  },

  methods: {
    addTodo() {
      this.$emit("addTodoEvent", this.newTodo);
      this.newTodo = "";
    }
  }
};
</script>
