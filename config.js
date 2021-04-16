import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyARNnJHEO4V-1bVub12GKKcnfiIw2GK1wo",
  authDomain: "barter-system-app-55a47.firebaseapp.com",
  projectId: "barter-system-app-55a47",
  storageBucket: "barter-system-app-55a47.appspot.com",
  messagingSenderId: "277746986095",
  appId: "1:277746986095:web:fc04ecc85af401c84bf19a"
};
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
