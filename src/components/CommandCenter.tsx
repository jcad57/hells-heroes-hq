import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { db } from "../firebase";
import { collection, orderBy, deleteDoc, doc, onSnapshot, query, addDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { NewsFeedItem } from "../types";

import "../styles/command-center-component.css";

import PageHeader from "./PageHeader";
import AllPosts from "./AllPosts";
import Post from "./Post";

export default function CommandCenter() {
  const [newsFeedItems, setNewsFeedItems] = useState<NewsFeedItem[]>([]);

  const [currentPost, setCurrentPost] = useState<NewsFeedItem | undefined>();
  const [showCreateNewPostModal, setShowCreateNewPostModal] = useState(false);
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostBody, setNewPostBody] = useState("");

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log("User signed out successfully!");
    } catch (error) {
      console.error("Error signing out:", error);
      alert("Error signing out");
    }
  };

  function createNewPost() {
    setCurrentPost(undefined);
    setShowCreateNewPostModal(true);
  }

  function submitNewPost(e) {
    e.preventDefault();
    const date = new Date();

    async function addNewPost() {
      const docRef = await addDoc(collection(db, "newsfeed-items"), {
        title: newPostTitle,
        body: newPostBody,
        timestamp: date.toUTCString(),
      });
      console.log(docRef);
    }
    addNewPost();
    setNewPostBody("");
    setNewPostTitle("");
    setShowCreateNewPostModal(false);
  }

  // function handleSubmitNewPost() {
  //   const date = new Date();

  //   async function addNewPost() {
  //     const docRef = await addDoc(collection(db, "newsfeed-items"), {
  //       title: newPostTitle,
  //       body: newPostBody,
  //       timestamp: date.toUTCString(),
  //     });
  //     console.log(docRef);
  //   }
  //   addNewPost();
  //   setNewPostBody("");
  //   setNewPostTitle("");
  //   setShowNewPostModal(false);
  // }

  function handleDeletePost(id: string) {
    async function deletePost() {
      await deleteDoc(doc(db, "newsfeed-items", id));
    }
    deletePost();
    setCurrentPost(undefined);
  }

  useEffect(() => {
    const collectionRef = collection(db, "newsfeed-items");
    const q = query(collectionRef, orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const items = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as NewsFeedItem[];
      setNewsFeedItems(items);
      setCurrentPost(newsFeedItems[0]);
    });

    return () => unsubscribe();
  }, []);

  function handleSetCurrentPost(id: string) {
    const filteredNewsItem = newsFeedItems.find((item) => item.id === id);
    if (filteredNewsItem?.id === currentPost?.id) setCurrentPost(undefined);
    if (newsFeedItems) setCurrentPost(filteredNewsItem);
    else return;
    setShowCreateNewPostModal(false);
  }
  console.log("test");
  return (
    <div className="command-center__container">
      <PageHeader />
      <AllPosts
        currentPostId={currentPost ? currentPost.id : ""}
        handleSignOut={handleSignOut}
        newsFeedItems={newsFeedItems}
        handleSelectPost={(id: string) => handleSetCurrentPost(id)}
        handleCreatePost={createNewPost}
      />
      <Post
        currentPost={currentPost}
        handleDeletePost={handleDeletePost}
        newPostTitle={newPostTitle}
        setNewPostTitle={setNewPostTitle}
        newPostBody={newPostBody}
        setNewPostBody={setNewPostBody}
        showCreateNewPostModal={showCreateNewPostModal}
        submitNewPost={(e) => submitNewPost(e)}
      />
    </div>
  );
}
