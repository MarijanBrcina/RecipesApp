// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
 
 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyAUD-dhSev7hV0Y0IghVp-wt2kW5pRtA6o",
  authDomain: "recipesapp-iip.firebaseapp.com",
  projectId: "recipesapp-iip",
  storageBucket: "recipesapp-iip.appspot.com",
  messagingSenderId: "987801158549",
  appId: "1:987801158549:web:c4dc1ef7522c4a6e066c9c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase

