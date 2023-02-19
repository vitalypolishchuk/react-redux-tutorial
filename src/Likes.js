import React from "react";
import { connect } from "react-redux";
import { incrementLikes, decrementLikes } from "./redux/actions";

class Likes extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="button-controls">
        <button onClick={this.props.incrementLikes}>❤ {this.props.likes}</button>
        <button onClick={this.props.decrementLikes}>Dislike</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { likes: state.likesReducer.likes };
}

export default connect(mapStateToProps, { incrementLikes, decrementLikes })(Likes);
