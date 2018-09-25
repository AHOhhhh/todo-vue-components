<template>
  <footer class="footer" v-show="todos.length">
      <span class="todo-count">
        <strong v-text="remaining"></strong> {{pluralize(remaining,'item')}} left
      </span>
      <ul class="filters">
        <li>
          <a href="#/all" @click="changeType('all')" :class="{selected: visibility == 'all'}">All</a>
        </li>
        <li>
          <a href="#/active" @click="changeType('active')" :class="{selected: visibility == 'active'}">Active</a>
        </li>
        <li>
          <a href="#/completed" @click="changeType('completed')" :class="{selected: visibility == 'completed'}">Completed</a>
        </li>
      </ul>
      <button class="clear-completed" @click="removeCompleted" v-show="todos.length > remaining">
        Clear completed
      </button>
    </footer>
</template>
<script>
import { mapState, mapGetters, mapMutations } from "vuex";

import filters from "../assets/js/filters.js";
export default {
  name: "Footer",
  computed: {
    ...mapState(["todos", "visibility"]),
    ...mapGetters(["remaining"])
  },
  methods: {
    ...mapMutations(["changeType", "removeCompleted"]),
    pluralize(count, word) {
      return word + (count > 1 ? "s" : "");
    }
  }
};
</script>
