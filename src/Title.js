import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { inputText } from "./redux/actions";

function Title(props) {
  const dispatch = useDispatch();
  const title = useSelector((state) => state.inputReducer.text);
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(inputText(text));
    setText("");
  };

  return (
    <div className="card-title">
      <form className="card-title-top" onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        <input type="submit" hidden />
      </form>
      <p>{title}</p>
    </div>
  );
}

export default Title;
