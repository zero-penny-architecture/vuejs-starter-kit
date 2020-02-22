<template>
	<div>
		<div class="m-2">
			<p>New element</p>
			<div>
				<label class="m-2" for="quantity">id:</label>
				<input class="m-2" type="number" name="quantity" id="quantity" value="-7" v-model="newTodo.id" />
				<label class="m-2" for="newText">text:</label>
				<input
					class="m-2"
					type="text"
					id="newText"
					value="ignored value because it's bend by v-model"
					v-model="newTodo.text"
				/>
			</div>
			<button class="m-2" @click="appendNewItem()">Add item</button>
		</div>
		<div class="m-2">
			<span>
				<input class="m-2" type="number" name="itr" id="itr" min="0" :max="maxindex()" v-model="index" />
				<button @click="removeAt()" class="m-2">Remove at {{index}}</button>
			</span>
		</div>
		<div class="m-2">
			<button @click="removeAll()">Remove all Todos</button>
		</div>
	</div>
</template>


<script lang="ts">
import { Vue, Component, Prop } from "vue-class-decorator";
import { todos } from "@/vuex";
import { Todo } from "@/store/todos"
import EventBusGolbal from "@/eventBus";

@Component({})
export default class AddRemoveElementTest extends Vue {
	@Prop({}) todos = todos;
	newTodo: Todo = { id: 0, text: "" };
	index: number = 0;

	mounted(): void {
		if (this.todos.todosAmount == 0) {
			let a = "helloworld:D".split("");
			a.forEach((s, i) => {
				this.newTodo.id = i;
				this.newTodo.text = s;
				this.appendNewItem();
			});
		}
	}

	maxindex(): number {
		let i = this.todos.todosAmount;
		return i > 0 ? i - 1 : 0;
	}

	removeAt(): void {
		this.todos.removeAt(this.index);
	}
	removeAll(): void {
		//emit an event to the parent to notify the clear operation
		let msg = {
			who: "AddRemoveTodos",
			content: "removed all " + this.todos.todosAmount + " todos in a bunch!"
		};
		this.todos.clearTodos();
		//EventBusGolbal
		this.$emit('myChildEvent', msg);
	}


	appendNewItem(): void {
		this.todos.add(this.newTodo);
		this.newTodo = { id: 0, text: "" };
	}
}
</script>


<style lang="scss" scoped>
.m-2 {
	margin: 1vh;
}
</style>