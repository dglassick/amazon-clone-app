import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDE77UbLc2PXa2VDnZeowVUE7Wg5PPbuWs',
  authDomain: 'store-clone-217ef.firebaseapp.com',
  projectId: 'store-clone-217ef',
  storageBucket: 'store-clone-217ef.appspot.com',
  messagingSenderId: '851658666869',
  appId: '1:851658666869:web:013204242cb1d4a7ef593c'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
