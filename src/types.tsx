export interface NewsFeedItemProps {
  id: string;
  title: string;
  body: string;
  timestamp: string;
  onClick: (id: string) => void;
  currentPostId: string;
}

export interface CurrentPostProps {
  currentPost: NewsFeedItemProps | undefined;
  handleDeletePost: (id: string) => void;
  showCreateNewPostModal: boolean;
  newPostTitle: string;
  newPostBody: string;
  setNewPostTitle: (e: string) => void;
  setNewPostBody: (e: string) => void;
  submitNewPost: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export interface AllPostsProps {
  handleSignOut: () => void;
  newsFeedItems: NewsFeedItemProps[];
  handleSelectPost: (id: string) => void;
  handleCreatePost: () => void;
  currentPostId: string;
}

export interface CreateNewPostProps {
  newPostTitle: string;
  setNewPostTitle: (e: string) => void;
  newPostBody: string;
  setNewPostBody: (e: string) => void;
  submitNewPost: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export interface UserSessions {
  id: string;
  email: string | null;
}

export interface FormInput {
  email: string;
  password: string;
}

export interface LoginProps {
  setIsLoading: (isLoading: boolean) => void;
}
