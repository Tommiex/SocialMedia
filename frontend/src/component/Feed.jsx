import React from "react";
import { getStorage, ref, listAll } from "firebase/storage";
import {
  doc,
  setDoc,
  addDoc,
  getDocs,
  timestamp,
  Firestore,
  getDocFromCache,
  serverTimestamp,
  collection,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import { db, storage } from "../FirebaseConfig";
import { useState, useEffect, useCallback } from "react";
import { uploadBytes, getDownloadURL, list } from "firebase/storage";
import "./CSS/Feed.css";
import { useAuth } from "../testAuth/auth";

const Feed = () => {
  const currentUser = useAuth();
  const [useData, setuseData] = useState();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
 
  const dataArray = [];
  
  async function fetchData() {
    const citiesRef = collection(db, "user's post");
    const q = query(citiesRef);

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(async (doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id);
      const uid = doc.id
      const uidSnapshot = collection(db, "user's post", doc.id, "post");
      const post = await getDocs(uidSnapshot);
      post.forEach(async (doc) => {
        const postData = doc.data();
        console.log(postData); 
        try{            
          const storageRef = ref(storage, postData.img);
          console.log("pass this")
          const downloadURL = await getDownloadURL(storageRef);
          dataArray.push({img: downloadURL});
            setData(dataArray);
            setLoading(false);
          }catch(error){
          console.log(error)
        }
        

    })
      });
    };
  
  useEffect(() => {
    fetchData();
   
  }, [2]);
  if (loading) {
    console.log("Loading");
  }
  return (

    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        data.map((post,index) => (
          <div key={index}>
            <div  id="postImage">
             
              <img id={index} src={post.img} alt="post" />
              
            </div>
          </div>
        ))
      )}
    </div>
  );
};
export default Feed;
