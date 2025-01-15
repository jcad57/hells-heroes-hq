interface NewsFeedItemProps {
  id: string;
  title: string;
  body: string;
  timestamp: string;
  onClick: (id: string) => void;
  currentPostId: string;
}

export default function NewsfeedItemP({ id, title, body, timestamp, onClick, currentPostId }: NewsFeedItemProps) {
  return (
    <div
      className={`post-wrapper prevent-select ${currentPostId === id ? `selected-post` : ""}`}
      onClick={() => onClick(id)}>
      <span className="timestamp-text">{timestamp}</span>
      <span className="post-preview__title">{title}</span>
      <div className="post-preview__body">{body.slice(0, 25) + "..."}</div>
    </div>
  );
}
