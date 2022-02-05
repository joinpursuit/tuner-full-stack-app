import axios from "axios";
import { useState, useEffect } from "react";
import Song from "./Song";

const API = process.env.REACT_APP_API_URL;

function Songs() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    axios.get( API + "/songs" )
    .then((res)=>{
      setSongs(res.data);
    }).catch((err)=>{
      console.log(err);
    })
  }, []);
}

export default Songs;