import { useState } from "react";
import { useFetchAllPosts } from "./useFetchAllPosts";
import { NewsFeedItemProps } from "../data/types";
import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "../data/firebase";

function useManagePosts() {
    const newsFeedItems = useFetchAllPosts();
    const [currentPost, setCurrentPost] = useState<NewsFeedItemProps | undefined>();
    const [showCreateNewPostModal, setShowCreateNewPostModal] = useState(false);
    // const [showEditPostModal, setShowEditPostModal] = useState(false);
    const [newPostTitle, setNewPostTitle] = useState("");
    const [newPostBody, setNewPostBody] = useState("");

    function toggleNewPostModal(toggle: boolean) {
        if (toggle === true || toggle === false) {
            setShowCreateNewPostModal(toggle);
            setCurrentPost(undefined);
        }
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
        setCurrentPost(undefined);
        setShowCreateNewPostModal(false);
        const fitleredPost = newsFeedItems.find((item) => item.id === id);
        if (fitleredPost?.id === currentPost?.id) return;
        setCurrentPost(fitleredPost);
        console.log(fitleredPost);
    }

    // function editPost(id: string, postTitle: string, postBody: string) {
    //     setCurrentPost(undefined);
    //     setShowEditPostModal(true);
    //     setNewPostTitle(postTitle);
    //     setNewPostBody(postBody);
    // }

    // function submitEditPost(e: React.FormEvent, currentPost: CurrentPostProps) {
    //     e.preventDefault();
    //     console.log(currentPost);
    //     // await updateDoc(doc(db, "newsfeed-items", id), {
    //     //     title: newPostTitle,
    //     //     body: newPostBody,
    //     //     timestamp: currentPost.timestamp,
    //     // });
    // }

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
