<template>
<div class="recipe">
  <img :src="recipe.slika" alt="Slika recepta" @click="openDetails">
  <div class="description">
    <div class="basic-info">
        <h3> {{recipe.Naziv}} </h3>
        <span>{{recipe.BrMin }} <font-awesome-icon icon="stopwatch" /> </span>
		 <span :style="{color: getVeganColor()}"><font-awesome-icon icon="leaf" /></span>
    </div>
    <p>Broj kalorija: {{recipe.BrKalorija}} kcal</p>
    <p>Cijena pripreme: {{recipe.CijenaNamirnica}} kn</p>
	<p1>{{recipe.KratkiOpis}}</p1>
  </div>
  </div>
</template>

<script>
export default {
    props: {
        recipe: {
            type: Object,
            defaulut: () => {}
        },
    },
	methods: {
		getVeganColor (){
			if(this.recipe.VegePrehrana == 'Da' ) return "#00e600";
			if(this.recipe.VegePrehrana == 'da' ) return "#00e600";
			
			return "#909090";
		},
		openDetails() {
			this.$router.push({
				name: "PregledRecepta",
				params: {id: this.recipe.id},
			});
		},
	},
};
</script>

<style lang='scss' scoped>
	.recipe {
		flex: 1;
		margin: 1rem;
		min-width: 300px;
		max-width: 300px;
		position: relative;

		img {
			max-width: 100%;
			box-shadow: 0 14px 28px rgba(0, 0, 0, 0.473),
				0 10px 10px rgba(0, 0, 0, 0.473);
			margin-bottom: 7px;
			border-radius: 20px;
			cursor: pointer;
		}

		.description {
			padding: 1rem 0;

			.basic-info {
				display: flex;
				justify-content: space-between;

				h3 {
					margin: 0;
					text-align: left;
					color: rgb(92, 7, 7);
				}

				span {
					border-radius: 10px;
					font-size: 20px;
					width: 53px;
					color: rgb(92, 7, 7);
				}
			}

			p {
				margin: 5px 0;
				color: rgb(143, 143, 143);
				text-align: left;
			}
			p1 {
				margin: 5px 10;
				color: rgb(0, 0, 0);
				text-align: center;
			}
		}
	}
</style>