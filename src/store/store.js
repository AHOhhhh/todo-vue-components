import Vue from "vue";
import Vuex from "vuex";
import filters from "../assets/js/filters.js";

Vue.use(Vuex);

const state = {
  todoIdx: 1,
  todos: [],
  visibility: "all"
};

export default new Vuex.Store({
  state,
  getters: {
    getAllDone(state) {
      return state.todos.every(todo => todo.completed);
    },
    getFilterTodos(state) {
      return filters[state.visibility](state.todos);
    },
    remaining(state) {
      return filters.active(state.todos).length;
    }
  },

  mutations: {
    addTodo(state, payload) {
      state.todos.push({ id: state.todoIdx++, ...payload });
    },

    updateAllDone(state, payload) {
      state.todos.forEach(todo => {
        todo.completed = payload;
      });
    },
    removeTodo(state, payload) {
      let idx = state.todos.findIndex(element => element == payload);
      state.todos.splice(idx, 1);
    },
    changeType(state, payload) {
      state.visibility = payload;
    },
    removeCompleted(state){
      state.todos = state.todos.filter(todo => !todo.completed);
    }
  }
});
