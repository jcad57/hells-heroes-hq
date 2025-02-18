import { useFetchAllPosts } from "../hooks/useFetchAllPosts";
import { useWindowSize } from "../hooks/useWindowSize";
import useManagePosts from "../hooks/useManagePosts";

import "../styles/app-styles.css";

import PageHeader from "./PageHeader";
import AllPosts from "./AllPosts";
import PostManager from "./PostManager";
import Analytics from "./Analytics";
import MobileNav from "./MobileNav";

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

    const isMobile = useWindowSize();

    return (
        <div className="command-center__container">
            <PageHeader />
            <AllPosts
                currentPostId={currentPost ? currentPost.id : undefined}
                newsFeedItems={newsFeedItems}
                handleSelectPost={(id: string) => findPost(id)}
                toggleNewPostModal={toggleNewPostModal}
                isMobile={isMobile}
            />

            <PostManager
                currentPost={currentPost}
                toggleCurrentPost={toggleCurrentPost}
                toggleNewPostModal={toggleNewPostModal}
                handleDeletePost={deletePost}
                newPostTitle={newPostTitle}
                setNewPostTitle={setNewPostTitle}
                newPostBody={newPostBody}
                setNewPostBody={setNewPostBody}
                showCreateNewPostModal={showCreateNewPostModal}
                submitNewPost={(e) => submitNewPost(e)}
                isMobile={isMobile}
            />
            <Analytics currentPost={currentPost} />
            {isMobile && <MobileNav toggleNewPostModal={toggleNewPostModal} />}
        </div>
    );
}
