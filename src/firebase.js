import firebase from 'firebase'


var firebaseConfig = {

    apiKey: "AIzaSyADYL9m11LZnFEuw-3rJsMTNfOxqg-kTUI",

    authDomain: "creditbaseug.firebaseapp.com",

    projectId: "creditbaseug",

    storageBucket: "creditbaseug.appspot.com",

    messagingSenderId: "388936650748",

    appId: "1:388936650748:web:244046b6038a431c032c79",

    measurementId: "G-S1WPFNYD3P"

  };

  // Initialize Firebase

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebaseApp.auth();

  const storage = firebase.storage();

  export {auth}

  export { storage }

  export default firebase


