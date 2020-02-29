<template>
    <div id="app">
        <header>
            <p>Here you can put a navbar</p>
        </header>
        <main>
            <router-view></router-view>
        </main>
        <footer>
            <p>Here you can put a footer</p>
        </footer>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-class-decorator";

@Component({})
export default class App extends Vue {

}
</script>

<style lang="scss" scoped>
#app {
    margin: 0;
    padding: 0;

    header,
    main,
    footer {
        overflow: hidden;
    }
}
</style>

<style lang="scss">
#app {
    .page {
        overflow: hidden;
        width: 100vw;
        min-height: 100vh;
        margin: 0;
        padding: 0;
    }
    .loader-img {
        width: 100px;
        height: 100px;
        background-color: white;
    }

    .btn-yellow {
        background: #e3c837;
        border-radius: 25px;
    }

    .btn-yellow-text {
        font-family: Roboto;
        font-size: 20px;
        line-height: 23px;

        color: #ffffff;
    }
}

input::-webkit-input-placeholder {
    color: gray !important;
}

input:-moz-placeholder {
    /* Firefox 18- */
    color: gray !important;
}

input::-moz-placeholder {
    /* Firefox 19+ */
    color: gray !important;
}

input:-ms-input-placeholder {
    color: gray !important;
}

a,
button {
    cursor: pointer;
}
</style>

