export interface NewsFeedItem {
  id: string;
  title: string;
  body: string;
  timestamp: string;
}

export interface CurrentPostProps {
  currentPost: NewsFeedItem;
  handleDeletePost: (id: string) => void;
  showCreateNewPostModal: boolean;
}

export interface AllPostsProps {
  handleSignOut: () => void;
  newsFeedItems: NewsFeedItem[];
  handleSelectPost: (id: string) => void;
  handleCreatePost: () => void;
  currentPostId: string;
}

export interface CreateNewPostProps {
  newPostTitle: string;
  setNewPostTitle: (e: string) => void;
  newPostBody: string;
  setNewPostBody: (e: string) => void;
  submitNewPost: () => void;
}

export interface UserSessions {
  id: string;
  email: string | null;
}
