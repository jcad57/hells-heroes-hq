import { CurrentPostProps } from "../types";

import CreateNewPost from "./CreateNewPost";
import CurrentPost from "./CurrentPost";

export default function Post({
  currentPost,
  toggleCurrentPost,
  handleDeletePost,
  showCreateNewPostModal,
  newPostTitle,
  setNewPostTitle,
  newPostBody,
  setNewPostBody,
  submitNewPost,
  toggleNewPostModal,
}: CurrentPostProps) {
  return (
    <div className="post-manager__wrapper dashboard-card">
      {!showCreateNewPostModal && !currentPost && (
        <div className="no-post-container">
          <span>
            Select a post to manage or <span className="text-gradient__purp">create</span> a new one
          </span>
        </div>
      )}
      {currentPost && <h2>Manage Post</h2>}
      {showCreateNewPostModal && (
        <CreateNewPost
          newPostTitle={newPostTitle}
          setNewPostTitle={setNewPostTitle}
          newPostBody={newPostBody}
          setNewPostBody={setNewPostBody}
          submitNewPost={submitNewPost}
          toggleNewPostModal={toggleNewPostModal}
        />
      )}
      {currentPost && (
        <CurrentPost
          currentPost={currentPost}
          toggleCurrentPost={toggleCurrentPost}
          handleDeletePost={handleDeletePost}
        />
      )}
    </div>
  );
}
