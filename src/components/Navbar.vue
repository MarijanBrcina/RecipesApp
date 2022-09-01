<template>
<div id="navbar1" class="card-shadow">
    <div id="navbar2">
        <h2 @click="$router.push('/')">RecipesApp
		<span><font-awesome-icon icon="home" /> </span></h2>
		<button @click="showAddRecipe = true" v-if="$route.path==('/')">Dodaj recept </button>
        <div v-if="$route.path==('/')">
            <input 
			v-model="search"
			type="text" 
			placeholder="Pretraži recepte "/>

			<AddRecipe v-if="showAddRecipe" @close="showAddRecipe = !showAddRecipe" >
				<template v-slot:header>
					<h3 class="m-0">Kreiranje novog recepta</h3>
				</template>
			
			<template v-slot:body >
				<form
					@submit.prevent="addRecipe"
					ref="recipeForm"
					id="recipe-form"
				>
					<div>Naziv recepta: </div>
					<input
						required
						v-model="form.Naziv"
						type="text"
						placeholder="Naziv"
					/>
					<div>Potrebni broj minuta: </div>
					<input
						required
						v-model="form.BrMin"
						type="number"
						placeholder="Vrijeme(min)"
					/>
					<div>Broj kalorija(po porciji): </div>
					<input
						required
						v-model="form.BrKalorija"
						type="number"
						placeholder="Kalorije"
					/>
					<div>Cijena pripreme: </div>
					<input
						required
						v-model="form.CijenaNamirnica"
						type="number"
						placeholder="Cijena namirnica (Kn)"
					/>
					<div>Vege recept?</div>
					<input
						required
						v-model="form.VegePrehrana"
						type="text"
						placeholder="(Da ili Ne)"
					/>

					<div>Kratki opis recepta</div>
					<textarea
						v-model="form.KratkiOpis"
						placeholder="Opis"
						rows="6"
					/>
					<div>Slika recepta</div>
					<input
						required
						v-model="form.slika"
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
							v-for="(Sastojci, index) in form.Sastojci"
							:key="index"
							v-model="form.Sastojci[index].Naziv"
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
							v-for="(Priprema, index) in form.Priprema"
							:key="index"
							v-model="form.Priprema[index].korak"
							type="text"
							placeholder="Korak"
						/>
					</div>

					<hr />


				</form>
			</template>
			
			<template v-slot:footer>
				<button id="add-recipe" @click="$refs.recipeForm.requestSubmit()">
					Dodaj recept
				</button>
			</template>
			</AddRecipe>
        </div>
    </div>
</div>
</template>

<script>
import AddRecipe from "./AddRecipe";
export default {
	components:{
		AddRecipe,
	},
	data(){
		return{
			showAddRecipe: false,
			form: {
				Naziv: "",
				BrMin: "",
				BrKalorija: "",
				CijenaNamirnica: "",
				slika: "",
				VegePrehrana: "",
				Sastojci: [{ Naziv: ""}],
				Priprema: [{ korak: ""}],
				KratkiOpis: "",

			},
			search: "",
		};
	},
	methods: {
			addingredient() {
				this.form.Sastojci.push({ Naziv: "" });
			},
			addstep() {
				this.form.Priprema.push({ korak: "" });
			},
			addRecipe(e) {
				e.preventDefault();

				this.$store.dispatch("addRecipe", this.form);
				this.showAddRecipe = false;
			},
		},
	watch: {
		search(){
			this.$store.dispatch("search", this.search);
			this.showAddRecipe = false;
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
	#recipe-form {
			display: flex;
			flex-direction: column;
			text-align: left;

			& > div {
				display: flex;
				flex-direction: column;
			}

			.add-ingredient {
				background-color: #721818;
				text-align: center;
				color: white;
				margin-left: 5px;
				height: 100%;
				padding: 2px 10px;
				font-size: 13px;
				border-radius: 10px;
				padding: 1re;
				align-self: center;
				cursor: pointer;
			}
		}

		#add-recipe {
			background-color: #721818;
			border: none;
			padding: 5px;
			height: 50px;
			width: 150px;
			color: white;
			border-radius: 10px;
			cursor: pointer;
			text-transform: uppercase;
			outline: none;
			margin-left: 180px;
		}
</style>