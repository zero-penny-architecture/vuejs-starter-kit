import { createModule, action, mutation, getter } from "vuex-class-component";
import { VuexModuleOptions } from 'vuex-class-component/dist/interfaces';

const VuexModule = createModule({
    namespaced: "todosStore",
    strict: false,
} as VuexModuleOptions);

export type Todo = {
    id: number;
    text: string;
};


export default class TodosStore extends VuexModule {
    private todos: Todo[] = [];

    get todosAmount(): number {
        return this.todos.length;
    }

    /**
     * Return a copy of the array
    */
    get allTodos(): Todo[] {
        return [...this.todos];
    }


    @action async add(todo: Todo): Promise<void> {
        this.todos = [...this.todos, todo];
    }

    @action async removeAt(index: number): Promise<void> {
        if (index >= 0 && index < this.todos.length) {
            /*this.todos = [
                ...this.todos.slice(0, index),
                ...this.todos.slice(index + 1, this.todos.length),
            ]*/
            let t = this.todos;
            /*
            let a = [];
            let i = -1, len = t.length;
            while(++i < index)
                a.push(t[i]);
            while(++i < len)
                a.push(t[i]);
            this.todos = a;
            */
            let i = -1, len = t.length, k = 0;
            let a = new Array(len-1);
            while(++i < index)
                a[i] = t[i];
            k = i;
            while(++i < len)
                a[k++] = t[i];
            this.todos = a;
        }
    }
}