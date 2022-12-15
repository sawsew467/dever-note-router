import React from "react";
import Poser from "../components/Poser";

function AddPost({ setPostList, postList }) {
    
  return (
    <div className="w-screen min-h-screen flex flex-col items-center bg-gradient-to-r from-green-400 to-blue-400">
      <Poser postList={postList} setPostList={setPostList}></Poser>
    </div>
  );
}

export default AddPost;
