import { useEffect, useState } from "react";
import { NewsFeedItemProps } from "../types";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../firebase";

export function useFetchAllPosts() {
  const [newsFeedItems, setNewsFeedItems] = useState<NewsFeedItemProps[]>([]);

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

  return newsFeedItems;
}
