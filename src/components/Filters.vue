<template>
  <div id="filter">
	<filters-list />
  </div>
</template>

<script>
import FiltersList from './FiltersList'
export default {
	components: {
		FiltersList
	}

}
</script>

<style lang='scss' scoped>
	#filter {
		display: flex;
		flex-direction: column;
		padding: 80px;
		min-height: 100vh;
		min-width: 150px;
		max-width: 150px;
		flex-grow: 1;
		background-color: #B65F5F;
		justify-content: left;

	}
</style>