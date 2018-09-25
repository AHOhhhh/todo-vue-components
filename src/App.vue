<template>
  <section class="todoapp" v-cloak>
    <Header></Header>
    <TodoList></TodoList>
    <Footer></Footer>
  </section>
</template>

<script>
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
export default {
  name: "App",
  data() {
    return {};
  },

  components: {
    Header,
    TodoList,
    Footer
  }
};
</script>
<style>
</style>
