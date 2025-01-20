import { useFetchAllPosts } from "../hooks/useFetchAllPosts";
import useManagePosts from "../hooks/useManagePosts";

import "../styles/app-styles.css";

import PageHeader from "./PageHeader";
import AllPosts from "./AllPosts";
import PostManager from "./PostManager";
import Analytics from "./Analytics";

export default function CommandCenter() {
  const newsFeedItems = useFetchAllPosts();
  const {
    findPost,
    deletePost,
    submitNewPost,
    currentPost,
    toggleCurrentPost,
    toggleNewPostModal,
    showCreateNewPostModal,
    newPostTitle,
    setNewPostTitle,
    newPostBody,
    setNewPostBody,
  } = useManagePosts();

  return (
    <div className="command-center__container">
      <PageHeader />
      <AllPosts
        currentPostId={currentPost ? currentPost.id : undefined}
        newsFeedItems={newsFeedItems}
        handleSelectPost={(id: string) => findPost(id)}
        toggleNewPostModal={toggleNewPostModal}
      />

      <PostManager
        currentPost={currentPost}
        toggleCurrentPost={toggleCurrentPost}
        handleDeletePost={deletePost}
        newPostTitle={newPostTitle}
        setNewPostTitle={setNewPostTitle}
        newPostBody={newPostBody}
        setNewPostBody={setNewPostBody}
        showCreateNewPostModal={showCreateNewPostModal}
        toggleNewPostModal={toggleNewPostModal}
        submitNewPost={(e) => submitNewPost(e)}
      />
      <Analytics currentPost={currentPost} />
    </div>
  );
}
