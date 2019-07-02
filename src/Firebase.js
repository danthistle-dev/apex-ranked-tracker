import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyB3voduCAKUPNbHXIRDGQVmqLwxkckF_Vw',
  authDomain: 'apex-ranked-tracker.firebaseapp.com',
  databaseURL: 'https://apex-ranked-tracker.firebaseio.com',
  projectId: "apex-ranked-tracker",
  storageBucket: "",
  messagingSenderId: "258434155223",
  appId: "1:258434155223:web:9e0f0945d12e547f"
}

firebase.initializeApp(config);

export default firebase;