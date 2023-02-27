import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBun32tg6_-S5OuQy4QyB0lKcu5e1n8MLs",
    authDomain: "fir-login-8b0da.firebaseapp.com",
    projectId: "fir-login-8b0da",
    storageBucket: "fir-login-8b0da.appspot.com",
    messagingSenderId: "495832521776",
    appId: "1:495832521776:web:28227e0800bbcfb6e6e1f5"
  };
  
  
  firebase.initializeApp(firebaseConfig);
  export default firebase;