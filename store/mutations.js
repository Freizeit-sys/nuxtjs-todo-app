import Vue from "vue";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

export default {
  addTodo(state, payload) {
    state.todos.push({ todo: payload.todo, id: payload.id });
  },

  setTodo(state, payload) {
    state.todos.push(payload);
  },

  removeTodo(state, index) {
    Vue.delete(state.todos, index);
  },
};
