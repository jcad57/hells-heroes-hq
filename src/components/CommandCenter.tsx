import { db, auth } from "../firebase";
import { signOut } from "firebase/auth";
import { collection, orderBy, deleteDoc, doc, onSnapshot, query, addDoc, serverTimestamp } from "firebase/firestore";
import { useEffect, useState } from "react";
import { NewsFeedItemProps } from "../types";

import "../styles/app-styles.css";

import PageHeader from "./PageHeader";
import AllPostsSidebar from "./AllPostsSidebar";
import PostManager from "./PostManager";
import AnalyticsSidebar from "./AnalyticsSidebar";

export default function CommandCenter() {
  const [newsFeedItems, setNewsFeedItems] = useState<NewsFeedItemProps[]>([]);
  const [currentPost, setCurrentPost] = useState<NewsFeedItemProps | undefined>();
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

  function submitNewPost(e: React.FormEvent) {
    e.preventDefault();
    const date = new Date();
    console.log(date);
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

  function handleDeletePost(id: string) {
    async function deletePost() {
      await deleteDoc(doc(db, "newsfeed-items", id));
    }
    deletePost();
    setCurrentPost(undefined);
  }

  useEffect(() => {
    const collectionRef = collection(db, "newsfeed-items");
    const q = query(collectionRef);
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const items = snapshot.docs
        .map((doc) => ({
          id: doc.id,
          title: doc.data().title,
          body: doc.data().body,
          timestamp: doc.data().timestamp,
        }))
        .sort((a, b) => {
          return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
        }) as NewsFeedItemProps[];
      setNewsFeedItems(items);
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
      <AllPostsSidebar
        currentPostId={currentPost ? currentPost.id : ""}
        handleSignOut={handleSignOut}
        newsFeedItems={newsFeedItems}
        handleSelectPost={(id: string) => handleSetCurrentPost(id)}
        handleCreatePost={createNewPost}
      />

      <PostManager
        currentPost={currentPost}
        handleDeletePost={handleDeletePost}
        newPostTitle={newPostTitle}
        setNewPostTitle={setNewPostTitle}
        newPostBody={newPostBody}
        setNewPostBody={setNewPostBody}
        showCreateNewPostModal={showCreateNewPostModal}
        submitNewPost={(e) => submitNewPost(e)}
      />
      <AnalyticsSidebar currentPost={currentPost} />
    </div>
  );
}
