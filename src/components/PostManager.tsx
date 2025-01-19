import { CurrentPostProps } from "../types";

import CreateNewPost from "./CreateNewPost";
import CurrentPost from "./CurrentPost";

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
      {currentPost && <CurrentPost currentPost={currentPost} handleDeletePost={handleDeletePost} />}
    </div>
  );
}
