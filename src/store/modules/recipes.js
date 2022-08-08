import recipesList from "@/assets/recipesList"
const set_search = "set_search"

const state = {
    recipes: recipesList,
    search: ''

}
const mutations = {
    [set_search](state, search) {
        state.search = search
    }
}

const actions = {
    search({commit}, search){
        commit(set_search,search)
    }
}

const getters = {
    getRecipes: state => {
         console.log(state.recipes.filter(recipes => recipes.Naziv.toLowerCase().indexOf(state.search.toLowerCase()) > -1))
        return state.recipes
        .filter(recipes => recipes.Naziv.toLowerCase().indexOf(state.search.toLowerCase()) > -1)
    }
}

export default {
    state,mutations,actions,getters
}