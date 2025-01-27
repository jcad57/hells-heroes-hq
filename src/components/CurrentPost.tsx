import { formatBodyText } from "../functions/formatBodyText";
import { CurrentPostProps } from "../data/types";

import closeIcon from "../assets/close-icon.png";

export default function CurrentPost({ currentPost, handleDeletePost, toggleCurrentPost }: CurrentPostProps) {
    return (
        <div className="selected-post-container ">
            <div className="selected-post__timestamp flex-center ">
                {currentPost?.timestamp}
                <img onClick={() => toggleCurrentPost()} className="close-icon" src={closeIcon} alt="" />
            </div>

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
