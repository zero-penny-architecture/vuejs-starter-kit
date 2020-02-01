<template>
    <div>
        <strong> Number of elements: {{computedInfo}} </strong> <br/>
        <button @click="goToHome()"> Go to Home </button>
        <h2>BEWARE: if you don't keep your precious data on vuex, then every changes will be lost ! As the array above</h2>
        
        <AddRemoveElementTest :todos="todos">
        </AddRemoveElementTest>

        <!-- another component -->
        
        <ListElementTest :todos="todos">
        </ListElementTest>

    </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-class-decorator';
import { ListElementTest } from '@/components'
import { AddRemoveElementTest } from '@/components'

import { todos } from "@/vuex";


@Component({
    components: {
        ListElementTest,
        AddRemoveElementTest
    }
})
export default class WithComponentsPage extends Vue {
    todos = todos;

    mounted() : void {
        
    }

    get computedInfo() : number {
        return this.itemCount;
    }
    get itemCount() : number {
        return this.todos.todosAmount;
    }

    goToHome() : void {
        this.$router.push({
            name: "home"
        });
    }
    
    removeChoosenIndex(): void {
        this.todos
    }
}

</script>
<style lang="scss" scoped>
    
</style>