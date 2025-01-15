import logo from "../assets/hhvii-logo.png";
import NewsfeedItem from "./NewsfeedItem";

import { AllPostsProps } from "../types";

export default function AllPosts({
  handleSignOut,
  newsFeedItems,
  handleSelectPost,
  handleCreatePost,
  currentPostId,
}: AllPostsProps) {
  return (
    <div className="sidebar__wrapper component-styles">
      <img className="sidebar__logo" src={logo} />
      <h2>All Posts</h2>
      <button onClick={handleCreatePost}>Create New Post</button>

      <div className="all-newsfeed-posts__wrapper">
        {newsFeedItems.map((newsItem) => (
          <NewsfeedItem
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

      <div>
        <button className="logout-btn" onClick={handleSignOut}>
          Logout
        </button>
      </div>
    </div>
  );
}
