<template>
	<div>
		<strong class="m-1">Number of elements: {{computedInfo}}</strong>
		<br />
		<button class="m-1" @click="goToHome()">Go to Home</button>
		<h2>BEWARE: if you don't keep your precious datas on vuex (instances on store folder), then every changes will be lost !</h2>

		<div v-if="showAlert">
			<span>
				<div>The child component {{myChildEventMsg.who}}</div>
			</span>
			<span>
				<div>sais: {{myChildEventMsg.content}}</div>
			</span>
		</div>

		<AddRemoveElementTest class="m-1" :todos="todos"></AddRemoveElementTest>

		<ListElementTest class="m-1" :todos="todos"></ListElementTest>
	</div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-class-decorator';
import { ListElementTest } from '@/components'
import { AddRemoveElementTest } from '@/components'
import { todos } from "@/vuex";
import EventBus from "@/eventBus";

@Component({
	components: {
		ListElementTest,
		AddRemoveElementTest
	}
})
export default class WithComponentsPage extends Vue {
	todos = todos;
	private showAlert: boolean = false;
	private myChildEventMsg: { who: string, content: string } = { who: "", content: "" };

	mounted(): void {
		EventBus.$on("my-child-event", this.onmyChildEventMsg);
	}

	get computedInfo(): number {
		return this.itemCount;
	}
	get itemCount(): number {
		return this.todos.todosAmount;
	}

	get getMyself(): Vue {
		return this;
	}

	goToHome(): void {
		this.$router.push({
			name: "home"
		});
	}

	onmyChildEventMsg(eventParameter: { who: string, content: string }): void {
		this.myChildEventMsg = eventParameter;
		this.showAlert = true;
		setTimeout(() => {
			this.showAlert = false;
		}, 3000);
	}
}

</script>
<style lang="scss" scoped>
</style>