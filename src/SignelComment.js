import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { commentDelete, commentEdit } from "./redux/actions";

function SingleComment({ comment }) {
  const dispatch = useDispatch();

  const [commentText, setCommentText] = useState("");
  const { text, id } = comment;

  useEffect(() => {
    setCommentText(text);
  }, [text]);

  const handleComment = (e) => {
    setCommentText(e.target.value);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(commentEdit(commentText, id));
  };

  const handleDelete = (e) => {
    dispatch(commentDelete(id));
  };

  return (
    <form onSubmit={handleUpdate} className="comments-item">
      <div className="comments-item-delete" onClick={handleDelete}>
        &times;
      </div>
      <input type="text" onChange={handleComment} value={commentText} />
      <input type="submit" hidden />
    </form>
  );
}

export default SingleComment;
