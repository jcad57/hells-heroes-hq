import logo from "../assets/hhvii-logo.png";
import NewsfeedPost from "./NewsfeedPost";
import useManageUser from "../hooks/useManageUser";

import { AllPostsProps } from "../data/types";

export default function AllPosts({
    newsFeedItems,
    handleSelectPost,
    currentPostId,
    toggleNewPostModal,
    isMobile,
}: AllPostsProps) {
    const { signUserOut } = useManageUser();

    return (
        <div className="sidebar__wrapper dashboard-card">
            <img className="sidebar__logo" src={logo} />
            <h2>All Posts</h2>
            {!isMobile && <button onClick={() => toggleNewPostModal(true)}>Create New Post</button>}

            <div className="all-newsfeed-posts__wrapper">
                {newsFeedItems.map((newsItem) => (
                    <NewsfeedPost
                        key={newsItem.id}
                        timestamp={newsItem.timestamp}
                        id={newsItem.id}
                        title={newsItem.title}
                        body={newsItem.body}
                        onClick={handleSelectPost}
                        currentPostId={currentPostId}
                    />
                ))}
            </div>

            {!isMobile && (
                <div>
                    <button className="logout-btn" onClick={signUserOut}>
                        Logout
                    </button>
                </div>
            )}
        </div>
    );
}
