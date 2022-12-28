import React from "react";
import { getStorage, ref, listAll } from "firebase/storage";
import { useState, useEffect, useCallback } from "react";
import { uploadBytes, getDownloadURL, list } from "firebase/storage";
import { storage } from "../FirebaseConfig";
import "./CSS/Feed.css";

const Feed = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const fetchData = useCallback(async () => {
    const imagesListRef = ref(storage, "feed/");
    const response = await listAll(imagesListRef);
    const urls = [];
    for await (const item of response.items) {
      const url = await getDownloadURL(item);
      urls.push(url);
    }
    setImageUrls(urls);
  }, [imageUrls]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return imageUrls;
  // <div className="post-grid">
  //   {imageUrls.map((url, i) => {
  //     //return  รูปทั้งหมดมาใช้
  //     return <img className = "pic-Group"src={url} key={i} alt="pic" />;
  //   })}
  // </div>
};

export default Feed;