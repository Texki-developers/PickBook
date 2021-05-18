import React, {useState} from 'react'
import './CommentCard.scss'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';


function CommentCard(props) {

  const [liked,setLiked] = useState(false)
  const [unliked,setUnliked] = useState(false)

  const like = ()=>{
    if(liked){
      setLiked(false)
    }else if(unliked){
      setUnliked(false)
      setLiked(true)
    }else{
      setLiked(true)
    }
  }

  const unlike = ()=>{
    if(unliked){
      setUnliked(false)
    }else if(liked){
      setLiked(false)
      setUnliked(true)
    }else{
      setUnliked(true)
    }
  }
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
              {liked?<ThumbUpIcon onClick={like}/>:<ThumbUpAltOutlinedIcon onClick={like}/>}<span>{props.like}</span>
            </div>
            <div className="like_down">
              {unliked?<ThumbDownIcon onClick={unlike}/>:<ThumbDownAltOutlinedIcon onClick={unlike}/>}<span>{props.unlike}</span>
            </div>
        </div>
        <hr />
      </div>
    );
}


export default CommentCard
