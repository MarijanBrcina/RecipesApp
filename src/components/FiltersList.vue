<template>
<div id="filters">
  <h2>Sortiranje recepata:</h2>
  <h3></h3>
  <p href="#" v-for="(filter, index) in filters" :key="index" @click="applyFilter(filter)">{{filter.name}}</p>
  
</div>
</template>

<script>
export default {
  data(){
    return{
      filters: [
        {
          name: "Najkraće vrijeme pripreme",
          key: 'BrMin',
          order: 'asc'
        },
        {
          name: "Najduže vrijeme pripreme",
          key: 'BrMin',
          order: 'desc'
        },
        {
          name: "Najmanji broj kalorija",
          key: 'BrKalorija',
          order: 'asc'
        },
        {
          name: "Najveći broj kalorija",
          key: 'BrKalorija',
          order: 'desc'
        },
        {
          name: "Najjeftinija priprema",
          key: 'CijenaNamirnica',
          order: 'asc'
        },
        {
          name: "Najskuplja priprema",
          key: 'CijenaNamirnica',
          order: 'desc'
        },
      ],
    };
  },
  methods: {
    applyFilter(filter) {
      this.$store.dispatch("filter", filter);
    },
  },
};
</script>

<style lang='scss' scoped>
	#filters {
		text-align: center;
		color: rgb(247, 242, 242);
		cursor: pointer;

		p {
			margin-left: 10px;
      font-size: 20px;
      -webkit-transition: color 1s;
      transition: color 1s;
		}
    p:hover {
    color: rgb(52, 9, 9);
}
        h2 {
            margin-left: 10px;
            clear: both;
            display: inline-block;
            overflow: hidden;
            white-space: nowrap;
        }
	}
</style>