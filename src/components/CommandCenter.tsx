import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { db } from "../firebase";
import { collection, addDoc, orderBy, getDocs, query } from "firebase/firestore";
import { useEffect, useState } from "react";

import "./create-post-form.css";

import NewsfeedItem from "./NewsfeedItem";

interface NewsFeedItem {
  id: string;
  title: string;
  body: string;
  timestamp: string;
}

export default function CommandCenter() {
  const [newsFeedItems, setNewsFeedItems] = useState<NewsFeedItem[]>([]);
  const [showNewPostModal, setShowNewPostModal] = useState(false);
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

  function handleNewPost() {
    setShowNewPostModal(true);
  }

  function handleSubmitNewPost() {
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
    setShowNewPostModal(false);
  }

  // function handleDeletePost() {}

  function handleCloseModal(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (!newPostTitle && !newPostBody) setShowNewPostModal(false);
    else if (window.confirm("Are you sure? Your post will not be saved. Continue?")) {
      setNewPostTitle("");
      setNewPostBody("");
      setShowNewPostModal(false);
    }
  }

  // function handleEditPost(e, postId) {
  //   e.preventDefault();
  //   async function editPost() {
  //     const date = new Date();

  //     await setDoc(doc(db, "newsfeed-items", postId), {
  //       title: newPostTitle,
  //       body: newPostBody,
  //       timestamp: date.toUTCString(),
  //     });
  //   }
  //   setShowNewPostModal(true);
  //   editPost();
  // }

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(query(collection(db, "newsfeed-items"), orderBy("timestamp", "desc")));
      const fetchedData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as NewsFeedItem[];
      setNewsFeedItems(fetchedData);
    };
    fetchData();
  }, [newsFeedItems]);

  return (
    <div className="app-container">
      <h1>COMMAND CENTER</h1>
      <button onClick={handleNewPost}>Create New Post</button>
      {showNewPostModal && (
        <div className="create-new-post__modal">
          <p>Create New Post</p>
          <form className="create-new-post__form">
            <input type="text" placeholder="Title" onChange={(e) => setNewPostTitle(e.target.value)}></input>
            <textarea placeholder="Body" onChange={(e) => setNewPostBody(e.target.value)} />
            <button onClick={handleSubmitNewPost}>Submit</button>
            <button className="red-btn" onClick={(e) => handleCloseModal(e)}>
              Close
            </button>
          </form>
        </div>
      )}
      <h2>YOUR POSTS</h2>
      <div className="all-posts__section">
        {newsFeedItems.map((newsItem) => (
          <NewsfeedItem
            key={newsItem.id}
            timestamp={newsItem.timestamp}
            id={newsItem.id}
            title={newsItem.title}
            body={newsItem.body}
          />
        ))}
      </div>
      <button className="logout-btn" onClick={handleSignOut}>
        Logout
      </button>
    </div>
  );
}
