import { CurrentPostProps } from "../types";

import "../styles/selected-post-styles.css";
import CreateNewPost from "./CreateNewPost";

export default function Post({
  currentPost,
  handleDeletePost,
  showCreateNewPostModal,
  newPostTitle,
  setNewPostTitle,
  newPostBody,
  setNewPostBody,
  submitNewPost,
}: CurrentPostProps) {
  return (
    <div className="highlighted-post__wrapper component-styles">
      <h2>Manage Post</h2>
      {showCreateNewPostModal === true && (
        <CreateNewPost
          newPostTitle={newPostTitle}
          setNewPostTitle={setNewPostTitle}
          newPostBody={newPostBody}
          setNewPostBody={setNewPostBody}
          submitNewPost={submitNewPost}
        />
      )}
      {currentPost && (
        <div className="selected-post-container">
          <div className="selected-post__timestamp">{currentPost.timestamp}</div>
          <div className="selected-post__title">{currentPost.title}</div>
          <div className="selected-post__body">{currentPost.body}</div>
          <div className="selected-post__btn-container">
            <button className="edit-btn">Edit</button>
            <button className="delete-btn" onClick={() => handleDeletePost(currentPost.id)}>
              Delete
            </button>
          </div>
        </div>
      )}
      {showCreateNewPostModal === false && !currentPost && (
        <div className="no-post-container">Select a post to manage</div>
      )}
    </div>
  );
}
