import React from "react";
import { getStorage, ref, listAll } from "firebase/storage";
import { useState, useEffect, useCallback } from "react";
import { uploadBytes, getDownloadURL, list } from "firebase/storage";
import { storage } from "../FirebaseConfig";
import "./CSS/Feed.css";

const Feed = () => {
  return(
    <div>
      <span>Feed</span>
    </div>
  )

};
export default Feed;