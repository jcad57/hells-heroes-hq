import { NewsFeedItemProps } from "../types";

export default function NewsfeedItemP({ id, title, body, timestamp, onClick, currentPostId }: NewsFeedItemProps) {
  return (
    <div
      className={`post__wrapper prevent-select ${currentPostId === id ? `selected-post` : ""}`}
      onClick={() => onClick(id)}>
      <span className="timestamp-text">{timestamp}</span>
      <span className="post-preview__title">{title.length > 17 ? title.slice(0, 17) + "..." : title}</span>
      <div className="post-preview__body">{body.length > 25 ? body.slice(0, 25) + "..." : body}</div>
    </div>
  );
}
