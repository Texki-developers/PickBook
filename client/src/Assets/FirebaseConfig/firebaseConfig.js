import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDvwRCSlv7dc9AbcY-lB9S-ZXcUx1Is_es",
    authDomain: "pickbooks-c4fca.firebaseapp.com",
    projectId: "pickbooks-c4fca",
    storageBucket: "pickbooks-c4fca.appspot.com",
    messagingSenderId: "360999552689",
    appId: "1:360999552689:web:21ca375010b50b355d8490",
    measurementId: "G-1KG9S4EF21"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;