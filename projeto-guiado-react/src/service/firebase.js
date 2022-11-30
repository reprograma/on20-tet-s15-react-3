// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNi9AkJdtv12CHvu666as-pUiXVm4OeCs",
  authDomain: "portfolio-da-fedra.firebaseapp.com",
  projectId: "portfolio-da-fedra",
  storageBucket: "portfolio-da-fedra.appspot.com",
  messagingSenderId: "654096989292",
  appId: "1:654096989292:web:3fcd25e8a900e731056c49",
  databaseURL: "https://portfolio-da-fedra-default-rtdb.firebaseio.com"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const database = getDatabase
export { database }