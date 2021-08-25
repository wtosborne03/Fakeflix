import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"


// Firebase Configuration Object
const firebaseConfig = {
    apiKey: "AIzaSyCgO6glX_Eo-0KI0NnchfWsb5HbfzpN8s0",
    authDomain: "yumuve-aaec0.firebaseapp.com",
    projectId: "yumuve-aaec0",
    storageBucket: "yumuve-aaec0.appspot.com",
    messagingSenderId: "985724113595",
    appId: "1:985724113595:web:87f9c292978938c12c0f9e",
    measurementId: "G-VNMMP7SL55"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email, photoURL } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                photoURL,
                createdAt,
                ...additionalData,
            })
        } catch (error) {
            console.log("error creating user", error.message)
        }
    }

    return userRef;
}

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        }, reject);
    });
}

// Firebase web app init
firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

// Sign in With Google Setup with popup
export const googleProvider = new firebase.auth.GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: "select_account" })
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider)

export default firebase
