import recipesList from "@/assets/recipesList"
const set_search = "set_search"
const set_filter = "set_filter"
const add_recipe = "add_recipe"

const state = {
    recipes: recipesList,
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