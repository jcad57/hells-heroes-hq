import { CurrentPostProps } from "../data/types";

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
    isMobile,
}: CurrentPostProps) {
    return (
        <div className="post-manager__wrapper dashboard-card">
            {!showCreateNewPostModal && !currentPost && !isMobile && (
                <div className="no-post__wrapper">
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
                    isMobile={isMobile}
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
