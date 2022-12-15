import React from "react";
import { useParams } from "react-router";

function DetailPost({ postList, setPostList }) {
  const params = useParams();
  const info = postList.filter(post => post.id === params.id)[0];
  console.log(info);
  return (
    <div className="w-screen min-h-screen flex flex-col items-center bg-gradient-to-r from-green-400 to-blue-400 p-5">
      <div
        className={
          "w-full flex-1 bg-white drop-shadow-xl pt-4 pb-0 rounded-lg flex flex-col gap-4 "
        }
      >
        <div className="px-4  flex-1">
          <h3 className="text-xl font-semibold">{info.title}</h3>
          <p className="text-md">{info.content}</p>
        </div>
        <div className="flex flex-row w-full">
          <button className="w-1/2 bg-red-500 hover:bg-red-400 transition-all rounded-bl-lg py-2">
            <i class="fa-solid fa-trash text-white"></i>
          </button>
          <button className="w-1/2 bg-yellow-500 hover:bg-yellow-400 transition-all rounded-br-lg py-2">
            <i class="fa-solid fa-star text-white"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailPost;
