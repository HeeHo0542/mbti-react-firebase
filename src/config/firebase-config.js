import firebase from "firebase";

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "mbti-react-firebase.firebaseapp.com",
  databaseURL: "https://mbti-react-firebase.firebaseio.com",
  projectId: "mbti-react-firebase",
  storageBucket: "mbti-react-firebase.appspot.com",
  messagingSenderId: "767525495587",
  appId: "1:767525495587:web:b5cb35dc59358d7beb6296"
};
firebase.initializeApp(config);
export default firebase;
