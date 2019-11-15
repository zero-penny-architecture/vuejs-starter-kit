<template>
    <div>
      <strong> Computed: {{computedInfo}} </strong> <br/>
      <button @click="showAlert()"> Click Me! </button> <br/>
      <button @click="goToHome()"> Go to Home </button>
    </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({})
export default class AboutPage extends Vue {
    mounted() : void {

    }

    get computedInfo() : string {
        return "Computed" + " " + "about";
    }

    showAlert() : void {
        alert("Well done [in about]");
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