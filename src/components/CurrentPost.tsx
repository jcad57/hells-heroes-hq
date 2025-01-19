import { formatBodyText } from "../functions/formatBodyText";
import { CurrentPostProps } from "../types";

export default function CurrentPost({ currentPost, handleDeletePost }: CurrentPostProps) {
  return (
    <div className="selected-post-container">
      <div className="selected-post__timestamp">{currentPost?.timestamp}</div>
      <div className="selected-post__title">{currentPost?.title}</div>
      <div className="selected-post__body">{formatBodyText(currentPost?.body ?? "")}</div>
      <div className="selected-post__btn-container">
        <button className="edit-btn">Edit</button>
        <button className="delete-btn" onClick={() => handleDeletePost(currentPost?.id ?? "")}>
          Delete
        </button>
      </div>
    </div>
  );
}
