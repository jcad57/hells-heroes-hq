import { CurrentPostProps } from "../data/types";

import CreateNewPost from "./CreateNewPost";
import CurrentPost from "./CurrentPost";

export default function Post({
    toggleCurrentPost,
    handleDeletePost,
    showCreateNewPostModal,
    newPostTitle,
    setNewPostTitle,
    newPostBody,
    setNewPostBody,
    submitNewPost,
    toggleNewPostModal,
    isMobile,
    currentPost,
}: CurrentPostProps) {
    return (
        <div className="post-manager__wrapper dashboard-card">
            {!showCreateNewPostModal && !currentPost && !isMobile && (
                <div className="no-post__wrapper">
                    <span>
                        Select a post to manage or{" "}
                        <span className="text-gradient__purp" onClick={() => toggleNewPostModal(true)}>
                            create
                        </span>{" "}
                        a new one
                    </span>
                </div>
            )}
            {showCreateNewPostModal && (
                <CreateNewPost
                    newPostTitle={newPostTitle}
                    setNewPostTitle={setNewPostTitle}
                    newPostBody={newPostBody}
                    setNewPostBody={setNewPostBody}
                    submitNewPost={submitNewPost}
                    toggleNewPostModal={toggleNewPostModal}
                    isMobile={isMobile}
                />
            )}
            {currentPost && <h2>Manage Post</h2>}
            {currentPost && (
                <CurrentPost
                    currentPost={currentPost}
                    toggleCurrentPost={toggleCurrentPost}
                    handleDeletePost={handleDeletePost}
                    newPostTitle={newPostTitle}
                    setNewPostTitle={setNewPostTitle}
                    newPostBody={newPostBody}
                    setNewPostBody={setNewPostBody}
                    submitNewPost={submitNewPost}
                    toggleNewPostModal={toggleNewPostModal}
                    isMobile={isMobile}
                />
            )}
            {/* {showEditPostModal && (
                <EditPost
                    newPostTitle={newPostTitle}
                    setNewPostTitle={setNewPostTitle}
                    newPostBody={newPostBody}
                    setNewPostBody={setNewPostBody}
                    currentPost={currentPost}
                    toggleNewPostModal={toggleNewPostModal}
                    isMobile={isMobile}
                    submitEditPost={submitEditPost}
                />
            )} */}
        </div>
    );
}
