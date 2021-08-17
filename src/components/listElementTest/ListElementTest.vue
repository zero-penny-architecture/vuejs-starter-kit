<template>
    <div>
        <p>Your items</p>
        <ul>
            <li class="m-2" v-for="(e, i) in this.todos.allTodos" v-bind:key="i">
                <span class="horizContainer m-2">
                    <i>{{i}} :</i>
                    <b>{{e.id}}</b>
                    <h4>{{e.text}}</h4>
                    <button @click="removeAt(i)">Delete me</button>
                </span>
            </li>
        </ul>
    </div>
</template>


<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { todos } from "@/vuex";
import TodosStore from "@/store/todos";

@Component({})
export default class ListElementTest extends Vue {
    @Prop({ default: todos }) todos! : TodosStore;

    removeAt(i: number): void {
        this.todos.removeAt(i);
    }

    todosCount(): number {
        return this.todos.todosAmount;
    }
}
</script>
<style lang="scss" scoped>
h4 {
    margin: 0px;
}
li {
    list-style-type: none;
}
.horizContainer {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: flex-start;
}
.horizContainer > * {
    margin: 2px;
}
.m-2 {
    margin: 1vh;
}
</style>