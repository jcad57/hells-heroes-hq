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
    <div className="all-posts-container component-styles">
      <div>
        <img className="logo" src={logo} />
        <h2>All Posts</h2>
        <button onClick={handleCreatePost}>Create New Post</button>
        <div className="margin1">
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
      </div>
      <div>
        <button className="logout-btn" onClick={handleSignOut}>
          Logout
        </button>
      </div>
    </div>
  );
}
