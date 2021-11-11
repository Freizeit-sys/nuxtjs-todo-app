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
			todo: '',
			todos: ["Workout", "Drink a Coke", "Protein Shake", "Learning"]
		}
	},

	mounted(){
		alert(this.$store.state.todos)
	},

	methods:{
		// Todo 追加の処理
		sub(){
			if(this.todo){
				// todos 配列に 新規 todo を追加
				this.todos.push(this.todo);
				this.todo = ''
			}
		},

		// TOdo 削除の処理
		removeTodo(index) {
			this.$delete(this.todos, index);
		}
	}
}
</script>
