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
  getDoc,
} from "firebase/firestore";
import { db, storage } from "../FirebaseConfig";
import { useState, useEffect, useCallback } from "react";
import { uploadBytes, getDownloadURL, list } from "firebase/storage";
import "./CSS/Feed.css";
import { useAuth } from "../testAuth/auth";
import {
  NavLink,
  useNavigate,
  Route,
  Routes,
  useParams,
} from "react-router-dom";

const Feed = ({ getData }) => {
  const currentUser = useAuth();
  const navigate = useNavigate();
  const params = useParams();
  const [useData, setuseData] = useState();
  const [data, setData] = useState();
  // const [userInfo ,setUserInfo] = useState()
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(localStorage.getItem("currentPage"));
  const [singleElement, setSingleElement] = useState(
    JSON.parse(localStorage.getItem("currentElement"))
  );
  const [useElement, setUseElement] = useState([]);
  // const handleClickPost = async (doc)=>{
  //   console.log(doc)

  // }
  const dataArray = [];

  const handleClickPost = async (doc) => {
    navigate(`/${doc.Username}/${doc.ID}`);
    setPage(`/${doc.Username}/${doc.ID}`);
    console.log(doc);
    // window.location.reload(false)
    setSingleElement(
        <div key={doc.Username}>
          dfsdfd
          <img src={doc.img}/>
        </div>
    )
  };

  async function createGridItems(dataArray) {
    const gridItems = [];
    for (let i = 0; i < dataArray.length; i++) {
      let type = Math.floor(Math.random() * 4) + 1; // Generate a random type
      gridItems.push(
        <div className={`grid-item grid-item-type-${type}`} key={i}>
          <h2 className="text2">{dataArray[i].Lag}</h2>
          {/* <NavLink
            to={`/${dataArray[i].Username}/${dataArray[i].ID}`}   
          > */}
          <div id="postImage">
            <img
              src={dataArray[i].img}
              alt="post"
              onClick={() => handleClickPost(dataArray[i])}
            />ผ
          </div>
          {/* </NavLink> */}
        </div>
      );
    }
    return gridItems;
  }

  async function fetchData() {
    const citiesRef = collection(db, "user's post");
    const q = query(citiesRef);

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(async (doc) => {
      // doc.data() is never undefined for query doc snapshots
      const uidSnapshot = collection(db, "user's post", doc.id, "post");
      const post = await getDocs(uidSnapshot);
      post.forEach(async (doc) => {
        const postData = doc.data();

        try {
          const storageRef = ref(storage, postData.img);

          const downloadURL = await getDownloadURL(storageRef);
          dataArray.push({ ...postData, img: downloadURL });
          setData(await createGridItems(dataArray));        
          setLoading(false);
        } catch (error) {}
      });
    });
  }
  

  useEffect(() => {    
    
    console.log(singleElement);
    // setUseElement(
    //     singleElement.map((input)=>(
    //       <div key={input.Username}>
    //         dfsdfd
    //         <img src={input.img}/>
    //       </div>
    //   ))

    // );
    console.log(useElement);
    // localFunction()
    fetchData();
  }, []);
  useEffect(() => {
    localStorage.setItem("currentPage", page);
    localStorage.setItem("currentElement", JSON.stringify(singleElement));
    // const paramsString = (JSON.stringify(params))
    // const path = paramsString.slice(paramsString.indexOf(":") + 2, paramsString.length - 2)
    // if (path!==''){
    //   setPage(path)
    // }
  });
  if (loading) {
    console.log("Loading");
  }

  //create fuction to edit grid style of picture frame
  console.log();
  console.log({...singleElement});
  return (
    <div className="grid-container">
      <Routes>
        <Route path={page} element={singleElement}></Route>
        <Route path="/*" element={data}></Route>
      </Routes>
      {useElement}
      {loading ? <p>Loading...</p> : null}
    </div>
  );
};
export default Feed;
