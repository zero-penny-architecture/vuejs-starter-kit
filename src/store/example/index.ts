import { createModule, action, mutation, getter } from "vuex-class-component";
import { VuexModuleOptions } from 'vuex-class-component/dist/interfaces';

const VuexModule = createModule({
    namespaced: "exampleStore",
    strict: false,
} as VuexModuleOptions);

export default class ExampleStore extends VuexModule {
    private incrVal = 0;

    get currentExampleValue() : number {
        return this.incrVal;
    }

    @mutation decrement() : void {
        this.incrVal--;
        console.log("decremented");
    }

    @action async bicrement() : Promise<void> {
        this.incrVal += 2;
    }
}