import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";

import "./create-post-form.css";

interface NewsFeedItemProps {
  title: string;
  body: string;
  timestamp: string;
  id: string;
}

export default function NewsfeedItem({ id, title, body, timestamp }: NewsFeedItemProps) {
  function handleDeletePost(e) {
    e.preventDefault();
    async function deletePost() {
      await deleteDoc(doc(db, "newsfeed-items", id));
    }
    deletePost();
  }

  return (
    <div className="post-container">
      <div>
        <div>
          <span className="timestamp-text">{timestamp}</span>
        </div>
        <span className="post-title">{title}</span>
      </div>
      <div className="post-body">{body}</div>
      <div className="btn-container">
        <button className="edit-btn">Edit Post</button>
        <button className="delete-btn" onClick={(e) => handleDeletePost(e)}>
          Delete Post
        </button>
      </div>
    </div>
  );
}
