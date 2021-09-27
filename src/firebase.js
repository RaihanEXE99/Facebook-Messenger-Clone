import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
        apiKey: "X",
        authDomain: "facebook-messenger-clone-e87f9.firebaseapp.com",
        databaseURL: "https://facebook-messenger-clone-e87f9.firebaseio.com",
        projectId: "facebook-messenger-clone-e87f9",
        storageBucket: "facebook-messenger-clone-e87f9.appspot.com",
        messagingSenderId: "934782220591",
        appId: "1:934782220591:web:96aee70a04bfea4e1c89da",
        measurementId: "G-NJDT9N98W0"
});

const db = firebaseApp.firestore();

export default db;
