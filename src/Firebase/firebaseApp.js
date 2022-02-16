import { initializeApp } from "firebase/app";
import { getFirestore, startAfter } from "firebase/firestore";
import firebaseConfig from "./firebase-config";
import {
  collection,
  getDocs,
  query,
  where,
  doc,
  addDoc,
  deleteDoc,
  setDoc,
  limit,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const getData = async (questionTopic) => {
  let data = [];
  const querySnapshot = await getDocs(collection(db, questionTopic));
  querySnapshot.forEach((doc) => {
    data.push(doc.data());
  });
  return data;
};

const getUserQuestions = async (topic, email) => {
  const questions = [];
  const q = query(collection(db, topic), where("ownerEmail", "==", email));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    questions.push({ ...doc.data(), id: doc.id });
  });

  return questions;
};

const addToDatabase = async (topic, dataObj) => {
  console.log(topic, dataObj);
  // Add a new document with a generated id

  const docRef = await addDoc(collection(db, topic), dataObj);
};

const deleteQuestion = async (topic, id) => {
  await deleteDoc(doc(db, topic, id));
};

const updateDocument = async (topic, id, data) => {
  await setDoc(doc(db, topic, id), data);
};

const getQuestionsForGame = async (topic, ownerEmail, lastItem) => {
  // let data = [];
  // const querySnapshot = await getDocs(collection(db, topic));
  console.log(lastItem);
  const q = lastItem
    ? await getDocs(
        query(
          collection(db, topic),
          where("ownerEmail", "!=", ownerEmail),
          startAfter(lastItem),
          limit(5)
        )
      )
    : await getDocs(
        query(
          collection(db, topic),
          where("ownerEmail", "!=", ownerEmail),
          limit(5)
        )
      );

  // console.log(lastItem ? "ok" : "okok");
  // console.log(q.docs[q.docs.length - 1]);
  // const qu = await getDocs(
  //   query(
  //     collection(db, topic),
  //     where("ownerEmail", "!=", "yzerman19c@gmail.com"),
  //     startAfter(q.docs[q.docs.length - 1]),
  //     limit(3)
  //   )
  // );
  // qu.forEach((doc) => {
  //   data.push(doc.data());
  // });
  // return qu;
  return q;
};

export {
  getData,
  getUserQuestions,
  addToDatabase,
  deleteQuestion,
  updateDocument,
  getQuestionsForGame,
};
