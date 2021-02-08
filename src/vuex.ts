import Vue from "vue";
import Vuex, { Store } from "vuex";
import ExampleStore from "@/store/example";
import TodosStore from "@/store/todos";
import { extractVuexModule, createProxy } from "vuex-class-component";
import { RootState } from "@/store/";

Vue.use(Vuex);

const store = new Store({
  state: new RootState(),
  modules: {
    ...extractVuexModule(ExampleStore),
    ...extractVuexModule(TodosStore),
  },
});

const example = createProxy(store, ExampleStore);
const todos = createProxy(store, TodosStore);

export default store;
export { example, todos };