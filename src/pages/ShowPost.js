import React from "react";
import Post from "../components/Post";

function ShowPost({ postList, setPostList }) {
  console.log(postList);
  return (
    <div className="w-screen min-h-screen flex flex-col items-center bg-gradient-to-r from-green-400 to-blue-400 p-5">
      <div className="flex flex-row flex-wrap w-[80rem] justify-center items-start gap-4">
        {postList.map((post) => (
          <Post info={post} setPostList={setPostList} postList={postList}></Post>
        ))}
      </div>
    </div>
  );
}

export default ShowPost;
