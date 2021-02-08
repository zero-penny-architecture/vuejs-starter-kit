<template>
    <div>
        <strong class="m-1">Number of elements: {{computedInfo}}</strong>
        <br />
        <button class="m-1" @click="goToHome()">Go to Home</button>
        <h2>BEWARE: if you don't keep your precious datas on vuex (instances on store folder), then every change will be lost !</h2>

        <div v-if="showAlert" class="mce-alert">
            <span>
                <div>The child component {{myChildEventMsg.who}}</div>
            </span>
            <span>
                <div>sais: {{myChildEventMsg.content}}</div>
            </span>
        </div>

        <AddRemoveElementTest class="m-1" :todos="todos" @my-child-event="onMyChildEventMsg" />

        <ListElementTest class="m-1" :todos="todos" />
    </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { ListElementTest } from "@/components"
import { AddRemoveElementTest } from "@/components"
import { todos } from "@/vuex";

export type MyChildEventMsg = {
    who: string;
    content: string;
};

@Component({
    components: {
        ListElementTest,
        AddRemoveElementTest
    }
})
export default class WithComponentsPage extends Vue {
    todos = todos;
    showAlert: boolean = false;
    myChildEventMsg: MyChildEventMsg = { who: "", content: "" };

    get computedInfo(): number {
        return this.itemCount;
    }

    get itemCount(): number {
        return this.todos.todosAmount;
    }

    goToHome(): void {
        this.$router.push({
            name: "home"
        });
    }

    onMyChildEventMsg(eventParameter: MyChildEventMsg): void {
        this.myChildEventMsg = eventParameter;
        this.showAlert = true;
        setTimeout(() => {
            this.showAlert = false;
        }, 3000);
    }
}

</script>
<style lang="scss" scoped>
.mce-alert {
    border: 2px solid blue;
}
</style>