import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCUiW5Nd8G3N5fLNMI5TPQSSUsPMnL6xOw",
    authDomain: "linkedin-clone-6575c.firebaseapp.com",
    projectId: "linkedin-clone-6575c",
    storageBucket: "linkedin-clone-6575c.appspot.com",
    messagingSenderId: "735561316808",
    appId: "1:735561316808:web:402c13574e5673ad7928fd"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};
  