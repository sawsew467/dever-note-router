import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Poser({ setPostList, postList }) {
  const [post, setPost] = useState({
    id: "",
    title: "",
    content: "",
    isStared: false,
  });
  const handleTitle = (e) => {
    setPost({
      ...post,
      title: e.target.value,
    });
  };
  const handleContent = (e) => {
    setPost({
      ...post,
      content: e.target.value,
    });
  };
  const handleSubmit = () => {
    setPostList([
      ...postList,
      {
        ...post,
        id: uuidv4(),
      },
    ]);
  };
  return (
    <>
      <div className="w-[40rem] bg-white drop-shadow-xl p-4 rounded-lg flex flex-col items-center my-12 gap-4">
        <h3 className="text-2xl font-semibold text-blue-500 ">Ghi chú</h3>
        <input
          className="text-lg px-4 py-2 border-2 border-blue-500 rounded-lg w-4/5"
          placeholder="Enter title..."
          onChange={(e) => handleTitle(e)}
        ></input>
        <textarea
          className="text-lg px-4 py-2 border-2 border-blue-500 rounded-lg w-4/5"
          placeholder="Enter content..."
          onChange={(e) => handleContent(e)}
        ></textarea>
        <button
          className="px-12 py-2 bg-blue-500 rounded-lg text-lg text-white"
          onClick={handleSubmit}
        >
          Tạo
        </button>
      </div>
    </>
  );
}

export default Poser;
