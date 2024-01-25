import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyBnj06yni0gtLVom4zMtcPQTiM-xHORtS8",
    authDomain: "ecommercecorso-82510.firebaseapp.com",
    projectId: "ecommercecorso-82510",
    storageBucket: "ecommercecorso-82510.appspot.com",
    messagingSenderId: "730293105980",
    appId: "1:730293105980:web:ad2d92b0ba12fc596dda39"
  };

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();

  export const firestore = firebase.firestore();

  const googleProvider = new firebase.auth.GoogleAuthProvider();

  googleProvider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

  export const getUserProfile = async (userAuth, additionInfo) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapshot = await userRef.get();

    if(!snapshot.exist){
      const {email} = userAuth;
      const createdAt = new Date();

      try{
        await userRef.set({
          email,
          createdAt,
          ...additionInfo

      })
      }catch(error){
        console.log(error);
      }
    }
    return userRef
  }

  export const saveProductIntoDatabase = async(objectToAdd) => {
    const categoryRef = firestore.collection('prodotti');
    
    const batch = firestore.batch();

    objectToAdd.forEach(obj => {
      const newDoc = categoryRef.doc();

      batch.set(newDoc, obj);
    });
    
    return await batch.commit();
  }

  export const getProdotti = async () => {

    const articoliRef = firestore.collection('prodotti');
    const articoliSnapshot = await articoliRef.get();

    const cicloSnapshot = articoliSnapshot.docs.map((val) => {
      const {id, title, items} = val.data();

      return {

        id,
        title,
        items
      }
    })
    return cicloSnapshot.sort((a,b) => {
      return a.id < b.id ? -1 : 1;
    }).reduce((accumulator, prodotti) => {
      accumulator[prodotti.title.toLowerCase()] = prodotti;
      return accumulator;
    }, {})
  }
  export default firebase;