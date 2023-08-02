// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

export const getFirebaseApp = ()=>{
    const firebaseConfig = {
        apiKey: "AIzaSyBeWLoQJz3KMLRYXhH2fDxTGlfHNfofSTI",
        authDomain: "chatbotai-c3de1.firebaseapp.com",
        databaseURL: "https://chatbotai-c3de1-default-rtdb.firebaseio.com",
        projectId: "chatbotai-c3de1",
        storageBucket: "chatbotai-c3de1.appspot.com",
        messagingSenderId: "515177470527",
        appId: "1:515177470527:web:5b6ab6e31267a925d7f68a"
      };
      
      // Initialize Firebase
      return initializeApp(firebaseConfig);
}
// Your web app's Firebase configuration
