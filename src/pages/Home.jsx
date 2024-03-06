import React, { useEffect, useState } from "react";
import service from "../appwrite/conffig";
import { Container, PostCard } from "../components";
// import PostCard  from '../components'

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    service.allPosts().then((posts) => {
      setPosts(posts.documents);
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-full py-8  mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold hover: text-gray-500">
                {" "}
                Login to read Posts
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }
  return (
    <div className="w-full py-8">
      <Container>
        {posts.map((post) => (
          <div key={post.$id} className="p-2 w-1/4">
            {/* <PostCard  post={post}/> */}
            <PostCard {...post} />
          </div>
        ))}
      </Container>
    </div>
  );
};

export default Home;
