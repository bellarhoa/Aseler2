import * as firebase from 'firebase';

let config = {
  apiKey: 'AIzaSyD-WLI0woWUrcT_QrnbpFfPHWO7OAegdyA',
  authDomain: 'aseler.firebaseapp.com',
  databaseURL: 'https://aseler.firebaseio.com',
  projectId: 'aseler',
  storageBucket: 'aseler.appspot.com',
  messagingSenderId: '559639773947',
  appId: '1:559639773947:web:dce98c51cafa52d50b265e',
  measurementId: 'G-NJXYV1E8PV',
};
firebase.initializeApp(config);

export default firebase;
