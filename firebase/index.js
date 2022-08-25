
const admin = require("firebase-admin");

const serviceAccount = require("./recipesapp.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const firestore = admin.firestore()
const recipes = require('./recipesList.json')
const db = firestore.collection('recipes')

recipes.map(async recipe => {
    try {
        await db.add(recipe)
    }catch(e){
        console.log(e);
    }
})