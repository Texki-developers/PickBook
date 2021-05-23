import React, {useState} from 'react'
import './CommentCard.scss'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import instance from '../../../Assets/server/instance';
import { useSelector } from 'react-redux';
import Message from '../../Message/Message';
// import { useParams } from 'react-router-dom';


function CommentCard(props) {
  // const {id} = useParams();
  const [liked,setLiked] = useState(false)
  const [unliked,setUnliked] = useState(false)
  const [message,SetMessage] = useState(false)
  // const commId = props._id
  const essentials = useSelector(state => state.essentials)
  const[likenum,setlikenum] = useState(props.likes?props.likes.length:0)
  const[dislikenum,setdislikenum] = useState(props.disLikes?props.disLikes.length:0)


  const like = (commentId,condition)=>{
    handleLike(commentId,condition);

    if(liked){
      setLiked(false)
      setlikenum(likenum-1)
    }else if(unliked){
      setUnliked(false)
      setLiked(true)
      setlikenum(likenum+1)
      setdislikenum(dislikenum-1)
    }else{
      setLiked(true)
      setlikenum(likenum+1)
    }
  }

  const unlike = (commentId,condition)=>{
    handleLike(commentId,condition);
    if(unliked){
      setUnliked(false)
      setdislikenum(dislikenum-1)
    }else if(liked){
      setLiked(false)
      setUnliked(true)
      setdislikenum(dislikenum+1)
      setlikenum(likenum-1)
    }else{
      setUnliked(true)
      setdislikenum(dislikenum+1)

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
              {liked?<ThumbUpIcon onClick={() => like(props._id,"like")}/>:<ThumbUpAltOutlinedIcon onClick={()=>like(props._id,"like")}/>}
              {props.likes?
              <span>{likenum}</span>  
              :<span>0</span>}
              
            </div>
            <div className="like_down">
              {unliked?<ThumbDownIcon onClick={() => unlike(props._id,"disLike")}/>:<ThumbDownAltOutlinedIcon onClick={() => unlike(props._id,"disLike")}/>}
              {props.disLikes?
                <span>{dislikenum}</span>
              :<span>0</span>}
            </div>
        </div>
        <hr />
      </div>
    );
}


export default CommentCard
