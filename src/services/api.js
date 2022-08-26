import firebase from './firebase'
const db = firebase.firestore().collection('recipes')

const api = {
    getRecipes: async()=> {
        const documents = await db.get()
        return documents.docs.map(doc => {
            return {...doc.data(), id: doc.id}
        })
    },
    addRecipe: async()=> {

    },
    getRecipeWithId: async()=> {

    },
    deleteRecipe: async()=> {

    },
    updateRecipe: async()=> {

    },
}

export default api