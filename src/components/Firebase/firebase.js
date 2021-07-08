import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyAS4bkboewFC3ar3bYn10cC3pYERSqkHmc",
    authDomain: "jobghost-48ac7.firebaseapp.com",
    projectId: "jobghost-48ac7",
    storageBucket: "jobghost-48ac7.appspot.com",
    messagingSenderId: "499042988897",
    appId: "1:499042988897:web:af7161dd3cbbb1b3138b20",
    measurementId: "G-H7J9GNQXX5"
}

class Firebase {
    constructor(){
        firebase.initializeApp(config)

        this.auth = firebase.auth();
        this.firestore = firebase.firestore();
        this.provider = new firebase.auth.GoogleAuthProvider();
    } 

    signInWithGoogle(){
        this.auth.signInWithPopup(this.provider);
    }

}

export default Firebase;