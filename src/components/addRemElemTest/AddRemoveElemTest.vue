<template>
  <div>
    <div>
      <p>New element</p>
      <div>
        <label for="quantity">id:</label>
        <input type="number" name="quantity" id="quantity" value="-7" v-model="newTodo.id" />
        <label for="newText">text:</label>
        <input
          type="text"
          id="newText"
          value="ignored value because it's bend by v-model"
          v-model="newTodo.text"
        />
      </div>
      <button @click="appendNewItem()">Add item</button>
    </div>
    <div>
      <span>
        <input type="number" name="itr" id="itr" min="0" :max="maxindex()" v-model="index" />
        <button @click="removeAt()">Remove at {{index}}</button>
      </span>
    </div>
  </div>
</template>


<script lang="ts">
import { Vue, Component, Prop } from "vue-class-decorator";
import { todos } from "@/vuex";
import { Todo } from "@/store/todos"

@Component({})
export default class AddRemoveElementTest extends Vue {
  @Prop({}) todos = todos;
  newTodo: Todo = { id: 0, text: "" };
  index: number = 0;

  mounted(): void {
    let a = "helloworld:D".split("");
    a.forEach((s, i) => {
      this.newTodo.id = i;
      this.newTodo.text = s;
      this.appendNewItem();
    });
  }

  maxindex(): number {
    let i = this.todos.todosAmount;
    return i > 0 ? i - 1 : 1;
  }

  removeAt(): void {
    this.todos.removeAt(this.index);
  }

  appendNewItem(): void {
    this.todos.add(this.newTodo);
    this.newTodo = { id: 0, text: "" };
  }
}
</script>


<style lang="scss" scoped>
</style>