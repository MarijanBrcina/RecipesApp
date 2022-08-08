<template>
<div id="navbar1" class="card-shadow">
    <div id="navbar2">
        <h2>RecipesApp</h2>
		<button>Dodaj recept</button>
        <div>
            <input 
			v-model="search"
			type="text" 
			placeholder="Pretraži recepte "/>
        </div>
    </div>
</div>
</template>

<script>
export default {
	data(){
		return{
			search: "",
		};
	},
	watch: {
		search(){
			this.$store.dispatch("search", this.search);
		}
	}
};
</script>

<style lang='scss' scoped>
	#navbar1 {
		position: fixed;
		width: 100%;
		z-index: 9999;

		#navbar2 {
			display: flex;
			padding: 15px;
			justify-content: space-between;
			background-color: #721818;

			h2 {
				margin: 0 1rem 0 0;
				color: white;
				cursor: pointer;
			}

			& > div {
				display: flex;
				flex-grow: 2;
				justify-content: flex-end;

				input {
					width: 95%;
					border: none;
					height: 35px;
					border-radius: 10px;
					box-sizing: border-box;
					padding: 10px;
					
				}
			}

			& > button {
			margin-top: 0px;
			height: 35px;
			background-color: #ffffff;
			border: none;
			text-transform: uppercase;
			font-weight: 700;
			border-radius: 10px;
			outline: none;
			cursor: pointer;
			margin-left: 850px;
		}
		}
	}
</style>