<template>
    <div>
        <strong class="m-1"> Number of elements: {{computedInfo}} </strong> <br/>
        <button class="m-1" @click="goToHome()"> Go to Home </button>
        <h2>BEWARE: if you don't keep your precious datas on vuex (instances on store folder), then every changes will be lost !</h2>
        
        <AddRemoveElementTest class="m-1" :todos="todos">
        </AddRemoveElementTest>

        <ListElementTest class="m-1" :todos="todos">
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
}

</script>
<style lang="scss" scoped>
    
</style>