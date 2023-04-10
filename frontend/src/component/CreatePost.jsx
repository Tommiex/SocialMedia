import React, { useState, useContext, useEffect } from "react";
import "./CSS/CreatePost.css";
import { useAuth } from "../testAuth/auth";
import axios from "axios";
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
  getDoc,
} from "firebase/firestore";
import { db, storage } from "../FirebaseConfig";
import { postInputs } from "../formSource";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const CreatePost = () => {
  const [data, setData] = useState({});
  const [file, setFile] = useState("");
  const [perc, setPerc] = useState(null);
  const [postNumber, setPostNumber] = useState(null);
  const [userId , setUserId] = useState()
  var num = 0;
  var postN = 0;
  const currentUser = useAuth();

  const uuid = require('uuid')
  const uniqueId = uuid.v4()
  
  async function getUserId(){
    const dataDoc = doc(db, "User",currentUser.currentUser.uid)
    const dataSnapshot = await getDoc(dataDoc)
    const info = dataSnapshot.data()
    setUserId(info)
  }

  async function fetchData() {
    const dataCol = collection(db,"user's post",currentUser.currentUser.uid,"post");
    const dataSnapshot = await getDocs(dataCol);
    const dataList = dataSnapshot.docs.map(doc => doc.data());
    setPostNumber((dataList.length)+1)
  }

  // useEffect ↓↓ upload Image to Storage
  useEffect(() => {
    getUserId()
    fetchData()
    const uploadFile = () => {
      const name = new Date().getTime() + "+" + file.name;
      console.log(name);
      const storageRef = ref(storage, "feed/"+file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setPerc(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ ...prev, img: downloadURL }));
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);

  //Handle function ↓↓ upload Description to Firestore Database
  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({ ...data, [id]: value });
  };
  console.log(data);

  //Real use
 
  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      setPostNumber(postNumber+1)
      console.log(postNumber)
      await setDoc(
        doc(db,"user's post",currentUser.currentUser.uid),
          {
            user: true
          }
      )
      await setDoc(
        doc(db,"user's post",currentUser.currentUser.uid,"post", "post"+postNumber), //collection will auto generate ID, Doc can order ID
        {
          ...data,
          Username: userId.Username,
          ID : uniqueId,
          timeStamp: serverTimestamp(),
        }
      );
      console.log(currentUser.currentUser.uid);

      // console.log(Object.keys())
    } catch (err) {
      console.log(err);
    }
  };

  // RETURN ↓↓
  return (
    <div className="createPost">
      <form onSubmit={handleAdd}>
        <div className="formInput">
          <label htmlFor="file">
            Image: <div></div>
          </label>
          <input
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        {postInputs.map((input) => (
          <div className="formInput" key={input.id}>
            <label>{input.label}</label>
            <input
              id={input.id}
              type={input.type}
              placeholder={input.placeholder}
              onChange={handleInput}
            />
          </div>
        ))}
        {/* <div className='uploadImage'>
          <div className=''>Input Imgae</div>
          <button>upload Imgae</button>
        </div>
        <div>
          <div>wrtie ur description</div>
        </div>
          */}
        <button
          disabled={perc !== null && perc < 100}
          type="submit"
          className="postBtn"
        >
          post
        </button>
      </form>
      <div>
        <p id="result"></p>
      </div>
    </div>
  );
};

export default CreatePost;
