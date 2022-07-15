import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


const config = {
    apiKey: "AIzaSyCNwqSNbLUHAbY2_Ml_JL8QsaAYEUVe3Dg",
    authDomain: "fashionstore-e9ea5.firebaseapp.com",
    databaseURL: "https://fashionstore-e9ea5.firebaseio.com",
    projectId: "fashionstore-e9ea5",
    storageBucket: "fashionstore-e9ea5.appspot.com",
    messagingSenderId: "690728019243",
    appId: "1:690728019243:web:9e425c794cf040b8fd516e"
};

export const GenerateUserProfileInformation = async (userAuth, additionalData) =>{
if (!userAuth) return;

const userRef = firestore.doc(`user/${userAuth.uid}`);
const snapShot = await userRef.get();
if (!snapShot.exists) {
const { displayName, email } = userAuth;
const createdAt = new Date();
try {
await userRef.set({
displayName,
email,
createdAt,
...additionalData,
});
} catch (error) {
console.log("error created User", error.message);
}
}
return userRef;
};
firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;