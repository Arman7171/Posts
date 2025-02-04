import React from "react";
import { PostType } from "@/types/types";
import "./styles.css";

interface PropsTypes {
  post: PostType;
  setSelectedPost?: React.Dispatch<React.SetStateAction<PostType>>;
  isPopup?: boolean;
}

const PostCard: React.FC<PropsTypes> = ({ post, setSelectedPost, isPopup }) => {
  return (
    <>
      <div
        className={`container ${isPopup ? "popup" : ""}`}
        onClick={() => setSelectedPost(post)}>
        <div className="post-card">
          <img
            src={post.img}
            srcSet={`${post.img_2x} 2x, ${post.img} 1x`}
            alt={post.title}
            className="post-image"
          />
          <div className="post-content">
            <span className="post-category">{post.tags}</span>
            <h2 className="post-title">{post.title}</h2>
            <div className="post-meta">
              <strong className="post-author">{post.autor}</strong>
              <span className="post-date">• {post.date}</span>
              <span className="post-views">• {post.views} Views</span>
            </div>
            <p className="post-text">{post.text}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostCard;
