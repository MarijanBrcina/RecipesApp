import recipesList from "@/assets/recipesList"
const set_search = "set_search"
const set_filter = "set_filter"

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
    }
}

const actions = {
    search({commit}, search){
        commit(set_search,search)
    },

    filter({commit}, filter){
        commit(set_filter,filter)
    }
}

const getters = {
    getRecipes: state => {
        //  console.log(state.recipes.filter(recipes => recipes.Naziv.toLowerCase().indexOf(state.search.toLowerCase()) > -1))
        return state.recipes
        .filter(recipes => recipes.Naziv.toLowerCase().indexOf(state.search.toLowerCase()) > -1)
        .sort(compare(state.filter))
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