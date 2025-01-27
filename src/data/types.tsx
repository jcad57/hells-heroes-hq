export interface NewsFeedItemProps {
    id: string;
    title: string;
    body: string;
    timestamp: string;
    onClick: (id: string) => void;
    currentPostId: string | undefined;
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
    toggleCurrentPost: () => void;
    toggleNewPostModal: (toggle: boolean) => void;
    isMobile: boolean | undefined;
}

export interface AnalyticsProps {
    currentPost: NewsFeedItemProps | undefined;
}

export interface AllPostsProps {
    newsFeedItems: NewsFeedItemProps[];
    handleSelectPost: (id: string) => void;
    currentPostId: string | undefined;
    toggleNewPostModal: (toggle: boolean) => void;
    isMobile: boolean | undefined;
}

export interface CreateNewPostProps {
    newPostTitle: string;
    setNewPostTitle: (e: string) => void;
    newPostBody: string;
    setNewPostBody: (e: string) => void;
    submitNewPost: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    toggleNewPostModal: (toggle: boolean) => void;
    isMobile: boolean | undefined;
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

export interface WindowSize {
    windowSize: number;
}
