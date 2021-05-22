import React, {useEffect, useState} from 'react'
import './CommentCard.scss'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import instance from '../../../Assets/server/instance';
import { useSelector } from 'react-redux';
import Message from '../../Message/Message';
import { useParams } from 'react-router-dom';


function CommentCard(props) {
  const {id} = useParams();
  const [liked,setLiked] = useState(false)
  const [unliked,setUnliked] = useState(false)
  const [message,SetMessage] = useState(false)
  const commId = props._id
  const essentials = useSelector(state => state.essentials)

  const like = (commentId,condition)=>{
    handleLike(commentId,condition);
    if(liked){
      setLiked(false)
    }else if(unliked){
      setUnliked(false)
      setLiked(true)
    }else{
      setLiked(true)
    }
  }

  const unlike = (commentId,condition)=>{
    handleLike(commentId,condition);
    if(unliked){
      setUnliked(false)
    }else if(liked){
      setLiked(false)
      setUnliked(true)
    }else{
      setUnliked(true)
    }
  }

  const handleLike = (commentId,condition) =>{
    if(essentials.userData){
      instance.post('/like-or-dislike',{commentId:commentId,userId:essentials.userData.uid,condition:condition}).then(res => {
        console.log(res);
      })
    }else{
      SetMessage(true)
      setTimeout(()=>{
        SetMessage(false)
      },2500)
    }
  }

    return (
      <div className="comment_container">
        {message&&<Message message="Only loggedIn users able to like" link="/" linkText="Click here to login" color="red"/>}
        <div id="user_name">
          <img
            src={props.userData[0].photo}
            alt=""
          />
          <p>{props.userData[0].name}</p>
        </div>
        <p id="review-text-prop" className={props._id}>
          {props.review}
        </p>
        <div id="like_container">
            <div className="like_up">
              {liked?<ThumbUpIcon onClick={() => like(props._id,"like")}/>:<ThumbUpAltOutlinedIcon onClick={()=>like(props._id,"like")}/>}<span>{props.userData[0].likes}</span>
            </div>
            <div className="like_down">
              {unliked?<ThumbDownIcon onClick={() => unlike(props._id,"disLike")}/>:<ThumbDownAltOutlinedIcon onClick={() => unlike(props._id,"disLike")}/>}<span>{props.unlike}</span>
            </div>
        </div>
        <hr />
      </div>
    );
}


export default CommentCard
