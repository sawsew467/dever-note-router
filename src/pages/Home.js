import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="w-screen min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-400 to-blue-400">
      <Link to="/add-post">
        <button className="p4 text-lg border-2 border-black mb-4">
          Thêm ghi chú
        </button>
      </Link>
      <Link to="/show-post">
        <button className="p4 text-lg border-2 border-black mb-4">
          Xem tất cả ghi chú
        </button>
      </Link>
    </div>
  );
}

export default Home;
