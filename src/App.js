import { useState } from "react";
import { Route, Routes } from "react-router";
import AddPost from "./pages/AddPost";
import DetailPost from "./pages/DetailPost";
import Home from "./pages/Home";
import ShowPost from "./pages/ShowPost";

function App() {
  const [postList, setPostList] = useState([]);
  console.log(postList);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/add-post" element={<AddPost postList={postList} setPostList={setPostList}></AddPost>}></Route>
        <Route path="/show-post" element={<ShowPost postList={postList} setPostList={setPostList}></ShowPost>}></Route>
        <Route path="/detail-post/:id" element={<DetailPost postList={postList} setPostList={setPostList}></DetailPost>}></Route>
      </Routes>
    </>
  );
}

export default App;
