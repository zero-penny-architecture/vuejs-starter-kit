<template>
    <div>
        <div>
            <p>New element</p>
            <div>
                <label for="quantity">id:</label>
                <input type="number" name="quantity" id="quantity" value="-7" v-model="newTodo.id">
                <label for="newText">text:</label>
                <input type="text" id="newText" value="ignored value because it's bend by v-model" v-model="newTodo.text">
            </div>
            <button @click="appendNewItem()"> Add item </button>        
        </div>
        <div>
            <span>
                <input type="number" name="itr" id="itr" min="0" :max="maxIndexToRemove()" v-model="indexToRemove">
                <button @click="removeChoosenIndex()"> Remove at {{indexToRemove}} </button>
            </span>
        </div>
    </div>
</template>


<script lang="ts">
import { Vue, Component, Prop } from 'vue-class-decorator';
//import { ModelTest } from "@/views/"
import { todos, Todo } from "@/vuex";

@Component({})
export default class AddRemoveElementTest extends Vue {
//    @Prop() model: ModelTest;
    @Prop({}) todos = todos;
    newTodo: Todo = {id: 0, text: ""};
    indexToRemove: number = 0;

    
    mounted(): void {
        let a = "helloworld:D".split("");
        let t = this;
        a.forEach((s,i)=>{
            t.newTodo.id = i;
            t.newTodo.text = s;
            t.appendNewItem();
        })
    }

    maxIndexToRemove(): number {
        let i = this.todos.todosAmount;
        return (i > 0) ? (i-1) : 1;
    }

    removeChoosenIndex(): void {
        let tod = this.todos;
        this.todos.removeAt(this.indexToRemove);
    }

    appendNewItem(): void {
        this.todos.add(this.newTodo);
        this.newTodo = {id: 0, text: ""};
    }
}
</script>




<style lang="scss" scoped>

</style>