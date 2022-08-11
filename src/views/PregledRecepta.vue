<template>
<div id='recipe-preview'>
    <navbar />

    <div id="recipe-container">
        <div id="recipe-img">
            <img :src="recipe.slika" alt="Slika recepta">
        </div>

    <div id="recipe-info">
        <div>
            <h1> {{recipe.Naziv}} <span :style="{color: getVeganColor()}"><font-awesome-icon icon="leaf" /></span></h1>
			<div id="options">
            <button class="edit">Uredi recept</button>
            <button class="delete">Obriši recept</button>
        </div>
            <h3>Priprema: <span>{{recipe.BrMin }} minuta <font-awesome-icon icon="stopwatch" /> </span></h3>
            <h3>Broj Kalorija: <span>{{recipe.BrKalorija}}</span></h3>
            <h3>Cijena pripreme: <span>{{recipe.CijenaNamirnica}}</span></h3>
            
            <h3><strong>Kratki opis: </strong><span> {{recipe.KratkiOpis}}</span></h3>
			<h3>Sastojci: 
                <br /><span v-for="(sastojak, index) in recipe.Sastojci" :key="index"> <br /> - {{sastojak.Naziv}} </span>
            </h3>
			<h3>Priprema: 
                <br /><span v-for="(priprema, index) in recipe.Priprema" :key="index"> <br /> {{priprema.korak}} </span>
            </h3>
        </div>
    </div>
    </div>
</div>
  
</template>

<script>
import Navbar from "../components/Navbar";
export default {
    components: {
        Navbar,
    },
    props: {
        id: {
            type: Number,
            default: null,
        },
    },
    data() {
        return {
            recipe: {},
        };
    },
    methods: {
		getVeganColor (){
			if(this.recipe.VegePrehrana == 'Da' ) return "#00e600";
			if(this.recipe.VegePrehrana == 'da' ) return "#00e600";
			
			return "#909090";
		},
    },
    created(){
        console.log("ID: ", typeof this.id);
        this.recipe = this.$store.getters.getRecipeWithId(parseInt(this.id));
    }
};
</script>

<style lang='scss' scoped>
	#recipe-preview {
		display: flex;
		overflow: auto;

		#recipe-container {
			display: flex;
			justify-content: center;
			flex-grow: 1;
			margin-top: 90px;
			padding: 0 1rem;

			#recipe-img {
				flex-grow: 1;
				min-width: 600px;

				img {
					max-width: 500px;
					box-shadow: 0 14px 28px rgba(0, 0, 0, 0.473),
						0 10px 10px rgba(0, 0, 0, 0.473);
					margin-bottom: 7px;
					border-radius: 15px;
				}
			}

			#recipe-info {
				display: flex;
				flex-grow: 2;
				text-align: left;
				flex-direction: column;
				justify-content: space-between;

				h1 {
					color: rgb(56, 6, 6);
					margin-bottom: 2rem;
				}

				h3 {
					color: rgb(0, 0, 0);

					#recipe-rating {
						display: flex;
						justify-content: center;
						border-radius: 10px;
						font-size: 20px;
						width: 53px;
						color: white;
					}

					span {
						margin-right: 5px;
						color: #721818;
					}
				}

				#options {
					max-width: 380px;
					display: flex;
					justify-content: space-between;
					margin-top: 1rem;

					.edit {
						height: 50px;
						width: 180px;
						color: white;
						background-color: #721818;
						border: none;
						text-transform: uppercase;
						font-weight: 600;
						border-radius: 10px;
						outline: none;
						cursor: pointer;
					}

					.delete {
						height: 50px;
						width: 180px;
						color: white;
						background-color: #721818;
						border: none;
						text-transform: uppercase;
						font-weight: 600;
						border-radius: 10px;
						outline: none;
						cursor: pointer;
					}
				}
			}
		}

	}
</style>