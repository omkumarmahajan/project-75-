import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBoXdSpRhcAXI49q4mK_x5Ws3ovzlyZ4BE",
  authDomain: "project-71-ae563.firebaseapp.com",
  projectId: "project-71-ae563",
  storageBucket: "project-71-ae563.appspot.com",
  messagingSenderId: "429244098305",
  appId: "1:429244098305:web:b867df83b64e8485601d00"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
