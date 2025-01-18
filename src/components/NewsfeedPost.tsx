import { NewsFeedItemProps } from "../types";

export default function NewsfeedItemP({ id, title, body, timestamp, onClick, currentPostId }: NewsFeedItemProps) {
  // const urlRegex = /(https?:\/\/[^\s]+)/g;
  // function formatBodyText(text: string) {
  //   return text.split(urlRegex).map((part, i) => {
  //     return urlRegex.test(part) ? (
  //       <a href={part} key={i}>
  //         {part}
  //       </a>
  //     ) : (
  //       part
  //     );
  //   });
  // }

  // body.length > 25 ? body.slice(0, 25) + "..." : body;
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
