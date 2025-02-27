// import { CreateNewPostProps } from "../data/types";

// import closeIcon from "../assets/close-icon.png";

// export default function EditPost({
//     newPostTitle,
//     setNewPostTitle,
//     newPostBody,
//     setNewPostBody,
//     toggleNewPostModal,
//     currentPost,
//     submitEditPost,
// }: CreateNewPostProps) {
//     console.log(currentPost);
//     return (
//         <>
//             <h2>Edit Post</h2>

//             <div className="">
//                 <form className="new-post-form__wrapper">
//                     <label>
//                         <div className="flex-center ">
//                             Title
//                             <img
//                                 onClick={() => toggleNewPostModal(false)}
//                                 className="close-icon"
//                                 src={closeIcon}
//                                 alt="close model icon"
//                             />
//                         </div>
//                     </label>
//                     <input onChange={(e) => setNewPostTitle(e.target.value)} value={newPostTitle} />
//                     <label>Body</label>
//                     <textarea rows={6} onChange={(e) => setNewPostBody(e.target.value)} value={newPostBody} />
//                     <button type="button" onClick={(e) => submitEditPost(e, currentPost)}>
//                         Save
//                     </button>
//                 </form>
//             </div>
//         </>
//     );
// }
