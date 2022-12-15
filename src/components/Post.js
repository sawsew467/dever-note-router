import React from "react";
import { useNavigate } from "react-router";

function Post({ info, postList, setPostList }) {
  const handleDelete = () => {
    const postListDeleted = postList.filter((post) => {
      return post.id !== info.id;
    });
    setPostList(postListDeleted);
  };
  const handleStar = () => {
    console.log(info.id);
    const postListStared = postList.map((post) =>
      post.id === info.id ? { ...post, isStared: !post.isStared } : post
    );
    setPostList(postListStared);
  };
  const navigate = useNavigate();
  const handleTitleClicked = () => {
    // navigate("/detail-post/" + info.id)
    if (info.isStared === true) {
      navigate(`/detail-post/${info.id}`);
    } else {
      alert("bai viet chua duoc danh dau");
    }
  };
  return (
    <>
      <div
        className={
          info.isStared === false
            ? "w-[16rem]  bg-white drop-shadow-xl pt-4 pb-0 rounded-lg flex flex-col gap-4 "
            : "w-[16rem]  bg-yellow-200 drop-shadow-xl pt-4 pb-0 rounded-lg flex flex-col gap-4 "
        }
      >
        <div className="px-4">
          <h3 className="text-xl font-semibold" onClick={handleTitleClicked}>
            {info.title}
          </h3>
          <p className="text-md max-h-20 truncate">{info.content}</p>
        </div>
        <div className="flex flex-row w-full">
          <button
            className="w-1/2 bg-red-500 hover:bg-red-400 transition-all rounded-bl-lg py-2"
            onClick={handleDelete}
          >
            <i class="fa-solid fa-trash text-white"></i>
          </button>
          <button
            className="w-1/2 bg-yellow-500 hover:bg-yellow-400 transition-all rounded-br-lg py-2"
            onClick={handleStar}
          >
            <i class="fa-solid fa-star text-white"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default Post;
