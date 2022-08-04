import recipesList from "@/assets/recipesList"


const state = {
    recipes: recipesList

}
const mutations = {

}

const actions = {

}

const getters = {
    getRecipes: state => {
        return state.recipes 
    }
}

export default {
    state,mutations,actions,getters
}