<template>
<div id='recipe-preview'>
    <navbar />

    <div id="recipe-container">

    <div id="recipe-info">
        <div>
            <h1> {{recipe.Naziv}} <span :style="{color: getVeganColor()}"><font-awesome-icon icon="leaf" />
			<div id="options">
            	<button @click="showAddRecipe = true" class="edit">Uredi recept</button>
            	<button @click="deleteRecipe" class="delete">Obriši recept</button>
        	</div>
			</span>
			</h1>
			
            <h3>Priprema: <span>{{recipe.BrMin }} minuta <font-awesome-icon icon="stopwatch" /> </span></h3>
            <h3>Broj Kalorija: <span>{{recipe.BrKalorija}}</span></h3>
            <h3>Cijena pripreme: <span>{{recipe.CijenaNamirnica}} kn</span></h3>
            
            <h3><strong>Kratki opis: </strong><span> {{recipe.KratkiOpis}}</span></h3>
			<h3>Sastojci: 
                <br /><span v-for="(sastojak, index) in recipe.Sastojci" :key="index"> <br /> - {{sastojak.Naziv}} </span>
            </h3>
			<h3>Priprema: 
                <br /><span v-for="(priprema, index) in recipe.Priprema" :key="index"> <br /> - {{priprema.korak}} </span>
            </h3>
        </div>
    </div>
		<div id="recipe-img">
            <img :src="recipe.slika" alt="Slika recepta">
    	</div>
    </div>
</div>

<AddRecipe v-if="showAddRecipe" @close="showAddRecipe = false" >
				<template v-slot:header>
					<h3 class="m-0">Uređivanje recepta</h3>
				</template>
			
			<template v-slot:body >
				<form
					@submit.prevent="updateRecipe"
					ref="recipeForm"
					id="recipe-form"
				>
					<div>Naziv recepta: </div>
					<input
						required
						v-model="recipe.Naziv"
						type="text"
						placeholder="Naziv"
					/>
					<div>Potrebni broj minuta: </div>
					<input
						required
						v-model="recipe.BrMin"
						type="number"
						placeholder="Vrijeme(min)"
					/>
					<div>Broj kalorija: </div>
					<input
						required
						v-model="recipe.BrKalorija"
						type="number"
						placeholder="Kalorije"
					/>
					<div>Cijena pripreme: </div>
					<input
						required
						v-model="recipe.CijenaNamirnica"
						type="number"
						placeholder="Cijena namirnica (Kn)"
					/>
					<div>Vege recept?</div>
					<input
						required
						v-model="recipe.VegePrehrana"
						type="text"
						placeholder="(Da ili Ne)"
					/>

					<div>Kratki opis recepta</div>
					<textarea
						v-model="recipe.KratkiOpis"
						placeholder="Opis"
						rows="6"
					/>
					<div>Slika recepta</div>
					<input
						required
						v-model="recipe.slika"
						type="text"
						placeholder="Slika(URL)"
					/>
					<hr />
					<div>
						<div id="ingredient-input">
							<p class="m-0">Sastojci <span @click="addingredient" class="add-ingredient">Dodaj sastojak</span></p>
						</div>

						<input
							required
							v-for="(Sastojci, index) in recipe.Sastojci"
							:key="index"
							v-model="recipe.Sastojci[index].Naziv"
							type="text"
							placeholder="Sastojak"
						/>
					</div>

					<hr />
					<div>
						<div id="ingredient-input">
							<p class="m-0">Priprema <span @click="addstep" class="add-ingredient">Dodaj korak</span></p>
						</div>

						<input
							required
							v-for="(Priprema, index) in recipe.Priprema"
							:key="index"
							v-model="recipe.Priprema[index].korak"
							type="text"
							placeholder="Korak"
						/>
					</div>

					<hr />


				</form>
			</template>
			
			<template v-slot:footer>
				<button id="update-recipe" @click="$refs.recipeForm.requestSubmit()">
					Spremi
				</button>
			</template>
			</AddRecipe>
  
</template>

<script>
import Navbar from "../components/Navbar";
import AddRecipe from "../components/AddRecipe";
import api from '../services/api';

export default {
    components: {
        Navbar,
		AddRecipe,
    },
    props: {
        id: {
            type: [String, Number],
            default: null,
        },
    },
    data() {
        return {
			showAddRecipe: false,
            recipe: {},
        };
    },
    methods: {
		getVeganColor (){
			if(this.recipe.VegePrehrana == 'Da' ) return "#00e600";
			if(this.recipe.VegePrehrana == 'da' ) return "#00e600";
			
			return "#909090";
		},
		deleteRecipe(){
			this.$store
			.dispatch('deleteRecipe', this.id)
			.then((res) => this.$router.push("/"));
		},
		updateRecipe(){
			this.$store.dispatch("updateRecipe", this.recipe);
			this.showAddRecipe = false;
		},
		addingredient() {
			this.recipe.Sastojci.push({ Naziv: "" });
		},
		addstep() {
			this.recipe.Priprema.push({ korak: "" });
		},
    },
    created(){
        const recipe = this.$store.getters.getRecipeWithId(parseInt(this.id));
		if(recipe){
			this.recipe=recipe
		} else {
			api
			.getRecipeWithId(this.id)
			.then((res) => (this.recipe = res))
			.catch((err) => console.log(err));
		}
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
				min-width: 550px;

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
				flex-direction: column;
				justify-content: space-between;

				h1 {
					color: rgb(56, 6, 6);
					margin-bottom: 2rem;
				}

				h3 {
					color: rgb(0, 0, 0);


					span {
						margin-right: 5px;
						color: #721818;
					}
				}

				#options {
					max-width: 1980px;
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