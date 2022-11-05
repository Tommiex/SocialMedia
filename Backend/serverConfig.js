import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBphU2xgvnA23A4DYHWFYQary3CjWr0Utg",
    authDomain: "socialmediawebapp-6e05c.firebaseapp.com",
    projectId: "socialmediawebapp-6e05c",
    storageBucket: "socialmediawebapp-6e05c.appspot.com",
    messagingSenderId: "836796879112",
    appId: "1:836796879112:web:d99076a2cc961d319a5cbd"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
// async function getUser(db) {
//   const userCol = collection(db,'TestUser');
//   const userSnapshot = await getDocs(userCol);
//   const userList = userSnapshot.docs.map(doc => doc.data());
//   return userList;
  
// }
// export const user = await getUser(db)
// console.log(user);

async function getData(db) {
  const dataCol = collection(db,'apple','ant','bookshelf');
  const dataSnapshot = await getDocs(dataCol);
  const dataList = dataSnapshot.docs.map(doc => doc.data());
  return dataList;
  
}
export const datatest = await getData(db)
console.log(datatest)