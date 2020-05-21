import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAyLqTcZO4_6YeHgUhOuCtDNZSFD3hawz0",
    authDomain: "hello-world-f6320.firebaseapp.com",
    databaseURL: "https://hello-world-f6320.firebaseio.com",
    projectId: "hello-world-f6320",
    storageBucket: "hello-world-f6320.appspot.com",
    messagingSenderId: "996372372499",
    appId: "1:996372372499:web:519cca3ceb86cc6d67f3e6"
}

firebase.initializeApp(firebaseConfig)
firebase.firestore()

export default firebase