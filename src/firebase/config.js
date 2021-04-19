import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyAL-Hbl6NT3WtHNa17n84Q1egkyZNG_JiU",
  authDomain: "photo-gallery-app-c5042.firebaseapp.com",
  projectId: "photo-gallery-app-c5042",
  storageBucket: "photo-gallery-app-c5042.appspot.com",
  messagingSenderId: "658887898607",
  appId: "1:658887898607:web:21c93f2203761864ffb21a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };