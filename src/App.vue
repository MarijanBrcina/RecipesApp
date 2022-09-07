<template>
  <router-view/>
</template>
<script>
import firebase from '@/services/firebase';
import recipes from '@/store/modules/recipes';
import router from '@/router';

firebase.auth().onAuthStateChanged((user) => {
	const currentRoute = router.currentRoute;

  if (user) {
    // User is signed in.
	console.log("***", user.email);
	recipes.currentUser = user.email;
	if(router.name !=='home'){
		router.push({ name: 'home'});
	 }
  } else{
	console.log("*** NO user")
	recipes.currentUser = null;
	
	if(router.name !=='Login'){
		router.push({ name: 'Login'});
	 }
  }
});
export default{
	name: 'app',
	data(){
		return{
			
		}
	}
}
</script>


<style lang="scss">
	body {
		background-color: #ffffffa6;
		margin: 0;
	}

	.m-0 {
		margin: 0;
	}

	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #5b1a1a;
	}

	.card-shadow {
		-webkit-box-shadow: 0px 5px 5px 0px rgba(8, 8, 8, 0.5);
		-moz-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.5);
		box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.5);
	}
</style>
