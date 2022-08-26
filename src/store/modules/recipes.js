import api from '../../services/api'

const set_search = "set_search"
const set_filter = "set_filter"
const add_recipe = "add_recipe"
const delete_recipe = "delete_recipe"
const update_recipe = "update_recipe"
const set_recipes = "set_recipes"

const state = {
    recipes: [],
    search: '',
    filter: ''

}
const mutations = {
    [set_search](state, search) {
        state.search = search
    },

    [set_filter](state, filter) {
        state.filter = filter
    },
    [add_recipe](state, recipe) {
        state.recipes.push(recipe)
    },
    [delete_recipe](state, id) {
        state.recipes.splice(state.recipes.findIndex(recipe => recipe.id === id, 1))
    },
    [update_recipe](state, recipe) {
        state.recipes = state.recipes.map(recipe1 => {
            if(recipe.id === recipe1.id){
                return recipe
            }
            return recipe1
        })
    },
    [set_recipes](state, recipes) {
        state.recipes = recipes
    }
}

const actions = {
    search({commit}, search){
        commit(set_search,search)
    },

    filter({commit}, filter){
        commit(set_filter,filter)
    },
    addRecipe({commit, state}, recipe){
        recipe.id = state.recipes.lenght + 1
        commit(add_recipe,recipe)
    },
    deleteRecipe({commit}, id) {
        commit(delete_recipe, id)
    },
    updateRecipe({commit}, recipe) {
        commit(update_recipe, recipe)
    },
    fetchRecipes({commit}){
        api.getRecipes()
        .then(res=> commit(set_recipes, res))
        .catch(err => console.log(err))
    }
}

const getters = {
    getRecipes: state => {
        
        return state.recipes
        .filter(recipes => recipes.Naziv.toLowerCase().indexOf(state.search.toLowerCase()) > -1)
        .sort(compare(state.filter))
    },
    getRecipeWithId: state => id => {
        return state.recipes.find(recipe => recipe.id === id)
    }
}

const compare = ({key,order}) => {
    return (a,b) => {
        let result = 0

        if (a[key] > b[key]){
            result = 1
        }
        if (a[key] < b[key]){
            result = -1
        }
        if(order === 'asc') return result
        return result * -1
    }
}

export default {
    state,mutations,actions,getters
}