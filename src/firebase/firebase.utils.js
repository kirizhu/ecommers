import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCtQ-wq7UTZ7IMM0SUw6kFgItsS-2ExoWM',
  authDomain: 'ecommers-db.firebaseapp.com',
  projectId: 'ecommers-db',
  storageBucket: 'ecommers-db.appspot.com',
  messagingSenderId: '585190665002',
  appId: '1:585190665002:web:46b25ed466424bfd588c53',
  measurementId: 'G-SMKFDYT9P3',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
