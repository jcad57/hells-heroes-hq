import { useState } from "react";
import { useFetchAllPosts } from "./useFetchAllPosts";
import { NewsFeedItemProps } from "../types";
import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

function useManagePosts() {
  const newsFeedItems = useFetchAllPosts();
  const [currentPost, setCurrentPost] = useState<NewsFeedItemProps | undefined>();
  const [showCreateNewPostModal, setShowCreateNewPostModal] = useState(false);
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostBody, setNewPostBody] = useState("");

  function toggleNewPostModal(state: boolean) {
    if (state) {
      setShowCreateNewPostModal(true);
      setCurrentPost(undefined);
    } else setShowCreateNewPostModal(false);
  }

  function toggleCurrentPost() {
    if (currentPost) setCurrentPost(undefined);
    else return;
  }
  async function submitNewPost(e: React.FormEvent) {
    e.preventDefault();
    const date = new Date();
    {
      if (newPostTitle && newPostBody)
        await addDoc(collection(db, "newsfeed-items"), {
          title: newPostTitle,
          body: newPostBody,
          timestamp: date.toUTCString(),
        });
    }
    setNewPostBody("");
    setNewPostTitle("");
    setShowCreateNewPostModal(false);
  }

  function findPost(id: string) {
    const fitleredPost = newsFeedItems.find((item) => item.id === id);
    setCurrentPost(undefined);
    setShowCreateNewPostModal(false);
    if (fitleredPost?.id === currentPost?.id) return;
    if (newsFeedItems) {
      setCurrentPost(fitleredPost);
    } else return;
    return currentPost;
  }

  async function deletePost(id: string) {
    setCurrentPost(undefined);
    return await deleteDoc(doc(db, "newsfeed-items", id));
  }
  return {
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
  };
}

export default useManagePosts;
