import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import uniqid from "uniqid";
import { commentCreate, commentsLoad } from "./redux/actions";
import SingleComment from "./SignelComment";

function Comments(props) {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.commentReducer.comments);

  const [textComment, setTextComment] = useState("");

  useEffect(() => {
    dispatch(commentsLoad());
  }, []);

  const handleInput = (e) => {
    setTextComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uniqid();
    dispatch(commentCreate(textComment, id));
  };

  const renderComments = () => {
    if (comments.length) {
      return comments.map((comment) => <SingleComment comment={comment} key={comment.id} />);
    }
  };

  return (
    <div className="card-comments">
      <form onSubmit={handleSubmit} className="comments-item-create">
        <input type="text" value={textComment} onChange={handleInput} />
        <input type="submit" hidden />
      </form>
      {renderComments()}
    </div>
  );
}

export default Comments;
