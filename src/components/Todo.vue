<template>
  <li class="todo" :class="{completed: todo.completed,editing:editing}">
          <div class="view">
            <input class="toggle" type="checkbox" v-model="todo.completed" >
            <label @dblclick="editTodo" v-text="todo.title"></label>
            <button class="destroy" @click="removeTodo"></button>
          </div>
          <input class="edit" type="text" v-model="todo.title" @blur="cancelEdit" @keyup.enter="doneEdit">
  </li>
</template>
<script>
export default {
  name: "Todo",
  data() {
    return {
      editing: false
    };
  },
  props: {
    todo: Object
  },
  methods: {
    editTodo() {
      this.editing = true;
      this.beforeCache = this.todo.title;
    },
    doneEdit() {
      this.editing = false;
    },
    cancelEdit() {
      if (!this.editing) {
        return;
      }
      this.editing = false;
      this.todo.title = this.beforeCache;
    },
    removeTodo() {
      this.$emit("removeTodoEvent", this.todo);
    }
  }
};
</script>