<template>
  <section class="main" v-show="todos.length" >
      <input id="toggle-all" class="toggle-all" type="checkbox" v-model="allDone">
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        <Todo v-for="todo in getFilterTodos" :todo="todo" :key="todo.id"></Todo>
      </ul>
    </section>
</template>
<script>
import { mapState, mapGetters, mapMutations } from "vuex";
import Todo from "./Todo";
export default {
  name: "TodoList",
  components: {
    Todo
  },
  computed: {
    allDone: {
      get() {
        return this.getAllDone;
      },
      set(value) {
        this.updateAllDone(value);
      }
    },
    ...mapState(["todos", "visibility"]),
    ...mapGetters(["getAllDone", "getFilterTodos"])
  },
  methods: {
    ...mapMutations(["updateAllDone"])
  }
};
</script>