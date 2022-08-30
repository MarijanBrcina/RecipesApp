import firebase from './firebase'
const db = firebase.firestore().collection('recipes')

const api = {
    getRecipes: async()=> {
        const documents = await db.get()
        return documents.docs.map(doc => {
            return {...doc.data(), id: doc.id}
        })
    },
    addRecipe: async(form)=> {
        const {id} = await db.add(form)
        return {...form, id}
    },
    getRecipeWithId: async(id)=> {
        const documents = await db.doc(id).get()
        return {...documents.data(), id}
    },
    deleteRecipe: async(id)=> {
        return await db.doc(id).delete()
    },
    updateRecipe: async(form)=> {
        return await db.doc(form.id).update(form)
    },
}

export default api