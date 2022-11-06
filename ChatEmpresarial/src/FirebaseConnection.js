import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAh8nWEVyA5zW3lWDf3r_j-JpAlUnRC7K0",
  authDomain: "chatempresarial-123dc.firebaseapp.com",
  projectId: "chatempresarial-123dc",
  storageBucket: "chatempresarial-123dc.appspot.com",
  messagingSenderId: "747313791613",
  appId: "1:747313791613:web:35d65463f6582efac1a714"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;