<template>
  <header class="header">
      <h1>todos</h1>
      <input class="new-todo" autofocus autocomplete="off" placeholder="What needs to be done?" v-model.trim="newTodo" @keyup.enter="add">
  </header>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "Header",
  data() {
    return {
      newTodo: ""
    };
  },

  methods: {
    add() {
      if (!this.newTodo) {
        return;
      }
      this.addTodo({
        title: this.newTodo,
        completed: false
      });
      this.newTodo = "";
    },

    ...mapMutations(["addTodo"])
  }
};
</script>
