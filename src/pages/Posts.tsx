import React, { useMemo, useState } from "react";
import { useSearchContext } from "@/context/searchContext";
import { useFetch } from "@/hooks/useFetch";
import { PostType } from "@/types/types";
import ClipLoader from "react-spinners/ClipLoader";
import PostCard from "@/components/Card/PostCard";
import Popup from "@/components/Popup/Popup";

const Login = () => {
  const [selectedPost, setSelectedPost] = useState<PostType | null>(null);
  const { data, loading } = useFetch<PostType[]>(
    "https://cloud.codesupply.co/endpoint/react/data.json",
    { method: "GET" }
  );
  const { text } = useSearchContext();

  const foundPosts = useMemo(() => {
    if (data && text.trim()) {
      const filteredData = data.filter((item) =>
        Object.values(item).some(
          (value) =>
            typeof value === "string" &&
            value.toLowerCase().includes(text.toLowerCase())
        )
      );
      return filteredData;
    } else if (data) return data;
  }, [data, text]);

  return (
    <div>
      {loading ? (
        <div className="loader-content">
          <ClipLoader color="#000" className="" size={30} speedMultiplier={1} />
        </div>
      ) : (
        <div className="blocks-container">
          {foundPosts.length ? (
            foundPosts.map((post) => (
              <PostCard
                post={post}
                key={post.title}
                setSelectedPost={setSelectedPost}
              />
            ))
          ) : (
            <div className="not-found">
              <div>Nothing has found</div>
            </div>
          )}
        </div>
      )}
      <Popup isOpen={!!selectedPost} onClose={() => setSelectedPost(null)}>
        {selectedPost && (
          <PostCard
            post={selectedPost}
            key={selectedPost.title}
            isPopup={true}
          />
        )}
      </Popup>
    </div>
  );
};

export default Login;
