import "../styles/create-post-form.css";

export default function CreateNewPost({ newPostTitle, setNewPostTitle, newPostBody, setNewPostBody, submitNewPost }) {
  return (
    <div>
      <h2>Create New Post</h2>
      <form className="new-post--form">
        <label>Title</label>
        <input placeholder="Lineup Change..." onChange={(e) => setNewPostTitle(e.target.value)} value={newPostTitle} />
        <label>Body</label>
        <textarea
          rows="6"
          placeholder="Yet another sick band added to the lineup..."
          onChange={(e) => setNewPostBody(e.target.value)}
          value={newPostBody}></textarea>
        <button onClick={(e) => submitNewPost(e)}>Post</button>
      </form>
    </div>
  );
}
