"use client";
import { useParams } from "next/navigation";

const BlogPost = () => {
  const params = useParams();
  return (
    <h1>
      Blog Path: {JSON.stringify(params.slug)}
      {}
    </h1>
  );
};

export default BlogPost;
