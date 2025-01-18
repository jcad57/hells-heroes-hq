import { CurrentPostProps } from "../types";

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
  // Check post body text for links and convert to active links
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  function formatBodyText(text: string) {
    return text.split(urlRegex).map((part, i) => {
      return urlRegex.test(part) ? (
        <a href={part} key={i} target="_blank">
          {part}
        </a>
      ) : (
        part
      );
    });
  }

  return (
    <div className="post-manager__wrapper dashboard-card">
      {showCreateNewPostModal === false && !currentPost && (
        <div className="no-post-container">
          <span>
            Select a post to manage or <span className="text-gradient__purp">create</span> a new one
          </span>
        </div>
      )}
      {currentPost && <h2>Manage Post</h2>}
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
          <div className="selected-post__body">{formatBodyText(currentPost.body)}</div>
          <div className="selected-post__btn-container">
            <button className="edit-btn">Edit</button>
            <button className="delete-btn" onClick={() => handleDeletePost(currentPost.id)}>
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
