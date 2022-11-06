import React, { useState, useContext, useEffect } from "react";
import "./CSS/CreatePost.css";
import { AuthContext } from "../testAuth/auth";
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
} from "firebase/firestore";
import { db, storage } from "../FirebaseConfig";
import { postInputs } from "../formSource";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const CreatePost = () => {
  const [data, setData] = useState({});
  const [file, setFile] = useState("");
  const [perc, setPerc] = useState(null);
  const [postNumber, setPostNumber] = useState("");
  var num = 0;
  var postN = 0;

  const currentUser = useContext(AuthContext);

  //  await querySnapshot.forEach((doc) => {
  //   // doc.data() is never undefined for query doc snapshots
  //   console.log(doc.id, " => ", doc.data());
  //   num++;
  //   console.log(num);

  // useEffect ↓↓ upload Image to Storage
  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + "+" + file.name;
      console.log(name);
      const storageRef = ref(storage, file.name);
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
  const handleAddTest = async (e) => {
    e.preventDefault();
    const newBooksRef = doc(db, "apple", "ant", currentUser.currentUser.uid, "books");
    const res = getDocs(db, "apple", currentUser.currentUser.uid ,"post", "books");
    axios
      .get("http://localhost:9050/", { crossdomain: true })
      .then((response) => {
        setPostNumber(response.data.map((x) => x.number));
        console.log(response.data.map((x) => x.number));
        document.getElementById("result").innerHTML = postNumber;
      });
    try {
      // const doc = await getDocFromCache(newBooksRef);
      const newBooksNumber = newBooksRef;
      const querySnapshot = await getDocs(
        collection(db, "apple", "ant", "bookshelf")
      );
      // const num = newBooksNumber._key.path.segments.length;
      // console.log(num + 1);
      // console.log(newBooksNumber);
      // console.log(doc.data());

      // querySnapshot.forEach((doc) => {
      //   // doc.data() is never undefined for query doc snapshots
      //   console.log(doc.id, " => ", doc.data());
      // });
      
    } catch (err) {
      console.log(err);
    }
  };
  const handleAdd = async (e) => {
    e.preventDefault();

    try {


      const res = await setDoc(
        doc(db,"user's post",currentUser.currentUser.uid,"post", "post"), //collection will auto generate ID, Doc can order ID
        {
          ...data,
          timeStamp: serverTimestamp(),
        }
      );
      console.log("success");

      // console.log(Object.keys())
    } catch (err) {
      console.log(err);
    }
  };

  var num = 0
  // Test DataBase
  // const handleAddTest = async (e)=>{
  //   e.preventDefault();
  //   try{
  //     const newBooksRef = doc(db,"apple","ant", "bookshelf", "post"+num)
  //     const querySnapshot = await getDocs(collection(db,"apple","ant", "bookshelf"));
  //     querySnapshot.forEach((doc) => {
  //       // doc.data() is never undefined for query doc snapshots
  //     console.log(doc.id, " => ", doc.data());
  //     console.log(doc)
  //   }
  //   );
  //    const test = await setDoc(newBooksRef,{number: num})
  //   }catch(err){
  //     console.log(err)
  //   }
  // }
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
