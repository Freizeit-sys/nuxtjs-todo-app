<template>
	<div class="container">
		<div class="d-flex flex-row justify-content-center">
			<div class="col-md-8 mt-5">
				<div class="card">
					<div class="card-body">
						<ul class="list-group">
							<li class="list-group-item" v-for="(todo, index) in todos" :key="todo"><a href="#" @click="removeTodo(index)">{{todo}}</a></li>
						</ul>

						<form @submit.prevent="sub">
							<div class="form-group mt-5">
								<input type="text" placeholder="Add a Todo" class="form-control" v-model="todo">
								<button type="submit" class="btn btn-outline-primary mt-3">Add Todo</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return {
			todo: ''
		}
	},

	computed:{
		todos(){
			return this.$store.state.todos
		}
	},

	mounted(){
		
	},

	methods:{
		// Todo 追加の処理
		sub(){
			if(this.todo){
				// this.todos.push(this.todo);
				this.$store.commit('addTodo', this.todo);
				this.todo = '';
			}
		},

		// Todo 削除の処理
		removeTodo(index) {
			// this.$delete(this.todos, index);
			this.$store.commit('removeTodo', index);
		}
	}
}
</script>
