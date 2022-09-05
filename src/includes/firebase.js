import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: 'AIzaSyBH8IsyBu-kKXCccBfFcPTOWq-CigGCL7Q',
    authDomain: 'music-797e6.firebaseapp.com',
    projectId: 'music-797e6',
    storageBucket: 'music-797e6.appspot.com',
    appId: '1:1027978732858:web:53771324bf5849f78f9c03',
};

//Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

db.enablePersistence().catch((error) => {
    console.log(`Firabase persistance error ${error}`);
});

const usersCollection = db.collection('users');
const songsCollection = db.collection('songs');
const commentsCollection = db.collection('comments');

// prettier-ignore
export {
    auth,
    db,
    usersCollection,
    songsCollection,
    commentsCollection,
    storage,
};
