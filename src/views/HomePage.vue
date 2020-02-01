<template>
    <div>
      <strong> Computed: {{computedInfo}} </strong><br/>
      <strong> value from Vuex: {{example.currentExampleValue}}</strong><br/>
      <button @click="showAlert()"> Click Me! </button><br/>
      <button @click="triggerIncrement()"> INCREMENT! </button><br/>
      <button @click="goToAbout()"> Go to About! </button><br/>
      <button @click="goToComponent()"> Go to Component page </button>
    </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-class-decorator';

import { example } from "@/vuex";

@Component({})
export default class HomePage extends Vue {
    example = example;

    mounted() : void {
        console.log("mounted");
    }

    get computedInfo() : string {
        return "Computed" + " " + "example";
    }

    showAlert() : void {
        alert("Well done");
    }

    goToAbout() : void {
        this.$router.push({
            name: "about"
        });
    }

    goToComponent() : void {
        this.$router.push({
            name: "comp"
        });
    }

    triggerIncrement() : void {
        this.example.bicrement();
    }
}
</script>
<style lang="scss" scoped>

</style>