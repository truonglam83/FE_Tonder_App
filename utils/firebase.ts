import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAVG7BAGDokYL7d9biSPQtUk7NppAPKzm0",
    authDomain: "tinher-8276d.firebaseapp.com",
    projectId: "tinher-8276d",
    storageBucket: "tinher-8276d.appspot.com",
    messagingSenderId: "1085343971347",
    appId: "1:1085343971347:web:4e33a20b485edbdead27e6",
};
const firebase = initializeApp(firebaseConfig);
const authentication = getAuth(firebase);
export const provider = new GoogleAuthProvider();
export const providerFB = new FacebookAuthProvider();
export const storage = getStorage(firebase);

export default authentication;
