import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDouYv9znYuedlBDK8CrfiGnRM9HVOBse0",
  authDomain: "app-grpql.firebaseapp.com",
  projectId: "app-grpql",
  storageBucket: "app-grpql.appspot.com",
  messagingSenderId: "448271751409",
  appId: "1:448271751409:web:0f3b07e8525fbe12a33150"
};

firebase.initializeApp(config);


export const addCollectionAndDocuments = async (collectionKey, docsToAdd) => {
  const collRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  docsToAdd.forEach((doc)=>{
    const newDocRef = collRef.doc(); // creates an empty doc with id/ref
    batch.set(newDocRef, doc); // save inside the batch
  });
  const results = await batch.commit();
  return results;
}

export const convertSnapshotToMap = (snapshot) => {
  const transformed  = snapshot.docs.map(doc=>{
    const {title, items} = doc.data(); // .data() only return the values of the object
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  });

 const arrToObj =   transformed.reduce((accumulator , collection)=>{
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {}) // initial value is {}
  return arrToObj; 
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
