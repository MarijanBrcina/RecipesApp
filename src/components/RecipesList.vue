<template>
<div id="recipes-container">

	<recipe-card v-for="recipe in recipes" :key="recipe.id" :recipe="recipe" />
</div>
</template>

<script>
import RecipeCard from './RecipeCard.vue'

export default {
	components: {
		RecipeCard
	},
	data(){
		return {
			recipes: [],
		};
	},
	computed: {
		recipes() {
			return this.$store.getters.getRecipes;
		},
	},
	created () {
		this.$store.dispatch("fetchRecipes");
	},
};
</script>

<style lang='scss' scoped>
	#recipes-container {
		padding-top: 1rem;
		display: flex;
		flex-wrap: wrap;
		flex-grow: 1;
		justify-content: center;
	}
</style>