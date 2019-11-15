import Vue from "vue";
import Vuex, { Store } from "vuex";
import ExampleStore from "@/store/example";
import { extractVuexModule, createProxy } from 'vuex-class-component';
import { RootState } from '@/store/';

Vue.use(Vuex);

const store = new Store({
  state: new RootState(),
  modules: {
    ...extractVuexModule(ExampleStore),
  },
});

const example = createProxy(store, ExampleStore);

export default store;
export { example };