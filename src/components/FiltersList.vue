<template>
<div id="filters">
  <h2>Filtrirajte recepte:</h2>
  <h3>Vrsta obroka</h3>
  <p>Glavno jelo</p>
  <p>Prilog</p>
  <p>Desert</p>
  <p>Predjelo</p>
  <p>Piće</p>

<h3 id="h3">Vrsta prehrane</h3>
  <p>Veganska</p>
  <p>Vegeterianska</p>
  <p>Ketogena</p>
  <p>Bez glutena</p>
  <p>Paleo</p>
</div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
	#filters {
		text-align: center;
		color: rgb(247, 242, 242);
		cursor: pointer;

		p {
			margin-left: 10px;
		}
        h2 {
            margin-left: -20px;
            clear: both;
            display: inline-block;
            overflow: hidden;
            white-space: nowrap;
        }
        h3{
           color: rgb(0, 0, 0);
        }
	}
</style>