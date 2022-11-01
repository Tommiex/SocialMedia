import React, { useState, useContext, useEffect } from "react";
import "./CSS/CreatePost.css";
import { AuthContext } from "../testAuth/auth";
import {
  doc,
  setDoc,
  addDoc,
  collection,
  timestamp,
  serverTimestamp,
} from "firebase/firestore";
import { db, storage } from "../FirebaseConfig";
import { postInputs } from "../formSource";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
const CreatePost = () => {
  const [data, setData] = useState({});
  const [file, setFile] = useState("");
  const [perc, setPerc] = useState(null)

  const currentUser = useContext(AuthContext);

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
          setPerc(progress)
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
      const res = await setDoc(
        doc(db, "user's post", currentUser.currentUser.uid), //collection will auto generate ID, Doc can order ID
        {
          ...data,
          timeStamp: serverTimestamp(),
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  // Test DataBase
  const handleAddTest = async (e)=>{
    e.preventDefault();
    try{
      const collection = ()=>{
        setDoc(doc(db, "capital", "GA"), 
      {
        name:'USer'
      });
      }
      await setDoc(doc(db, "cities", "LA"),collection);
    }catch(err){
      console.log(err)
    }
  }


  // RETURN ↓↓
  return (
    <div className="createPost">
      <form onSubmit={handleAddTest}>
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
          disabled={perc !== null && perc <100} 
          type="submit"
          className="postBtn"
        >
          post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
