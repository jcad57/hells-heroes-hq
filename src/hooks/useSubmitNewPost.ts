import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { useState } from "react";

function useSubmitNewPost() {
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostBody, setNewPostBody] = useState("");
  const [showCreateNewPostModal, setShowCreateNewPostModal] = useState(false);

  const date = new Date();
  async function submitNewPost(e: React.FormEvent) {
    e.preventDefault();
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

  return {
    submitNewPost,
    setNewPostBody,
    setNewPostTitle,
    newPostBody,
    newPostTitle,
    showCreateNewPostModal,
  };
}

export { useSubmitNewPost };
