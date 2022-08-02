<template>
  <div class="home">
    <navbar />

    <div id="main-section">
      <recipes-list/>
      <Filters/>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import RecipesList from '@/components/RecipesList.vue'
import Filters from '@/components/Filters.vue'


export default {
  name: 'HomeView',
  components: {
    Navbar,
    RecipesList,
    Filters

  }
}
</script>

<style lang="scss" scoped>
	.home {
		display: flex;
		flex-direction: column;

		#main-section {
			display: flex;
			margin-top: 50px;
		}
	}
</style>