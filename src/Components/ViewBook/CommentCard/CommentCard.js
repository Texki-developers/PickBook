import React from 'react'
import './CommentCard.scss'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';


function CommentCard(props) {
    return (
      <div className="comment_container">
        <div id="user_name">
          <img
            src={props.image}
            alt=""
          />
          <p>{props.name}</p>
        </div>
        <p>
          {props.comment}
        </p>
        <div id="like_container">
            <div className="like_up">
              <ThumbUpAltOutlinedIcon/><span>{props.like}</span>
            </div>
            <div className="like_down">
              <ThumbUpAltOutlinedIcon/><span>{props.unlike}</span>
            </div>
        </div>
        <hr />
      </div>
    );
}


export default CommentCard
