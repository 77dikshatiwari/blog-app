import React from "react";
// import appwriteService from '../appwrite/conffig'
import { Link } from "react-router-dom";
import service from "../appwrite/conffig";

const PostCard = ({ $id, title, Image }) => {
  return (
    <div>
      <Link to={`/post/${$id}`}>
        <div className="w-full bg-gray-100 rounded-xl p-4">
          <div className="w-full justify-center mb-4">
            <img
              src={service.getFilePreview(Image)}
              alt={title}
              className="rounded-xl"
            />
          </div>
          <h2 className="text-xl font-bold">{title}</h2>
        </div>
      </Link>
    </div>
  );
};

export default PostCard;
