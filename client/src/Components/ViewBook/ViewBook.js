import React, { useState, useEffect } from 'react'
import './ViewBook.scss'
import StarIcon from '@material-ui/icons/Star';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import CommentCard from './CommentCard/CommentCard'
import Loding from '../PreLoader/PreLoader'
import { useParams } from 'react-router';
import instance from '../../Assets/server/instance'
import Message from '../Message/Message';
import { useSelector } from 'react-redux';  
import CommentField from './CommentField/CommentField';
import RatingDrop from './RatingDrop/RatingDrop';


const ViewBook = () => {
  var { id } = useParams();
  var [loading, setLoading] = useState(true)
  var [details, SetDetails] = useState({})
  const [isMessage, setIsMessage] = useState(false)
  const [isCommentInput, setIsCommentInput] = useState(false)
  const [reviews, setReviews] = useState(false)
  const [isReview,setIsReview] = useState(false)
  const [rating,setRating] = useState(false)
  const essentials = useSelector(state => state.essentials)

  useEffect(() => {
    const getBook = async () => {
      await instance.get(`/getonebook/${id}`).then(async res => {
        if (res.status === 200) {
          // console.log(res);
          await SetDetails(res.data[0])
          await setLoading(false)
        } else {
          await getBook()
        }
      })
    }
    const getReviews = () => {
      instance.get(`/reviews/${id}`).then(async res => {
        console.log(res.data);
        setReviews(res.data)
        if(res.data.reviewCount !== 0){
          setIsReview(true)
          console.log("false");
        }else{
          setIsReview(false)
          console.log(true);
        }
      })
    }
    getBook();
    getReviews();
  }, [id])

  const handleReview = (event) => {
    event.preventDefault();
    if (essentials.userData) {
      setIsCommentInput(!isCommentInput);
    } else {
      console.log("message");
      setIsMessage("Please login to write you review")
      setTimeout(() => {
        setIsMessage(false)
      }, 3000)
    }
  }

  const handleRatingClick = () => {
    if(essentials.userData){
      setRating(!rating)
    }else{
      setIsMessage("Please login to rate a book")
      setTimeout(() => {
        setIsMessage(false)
      }, 3000)
    }
  }

  return (
    loading ? <Loding /> :

      <div className="viewbook_container">
        {isMessage && <Message message={isMessage} link="/" linkText="Click here to login" color="red" />}
        <div className="book_container">
          <img
            src={details.imageURL}
            alt=""
          />
          <div className="book_detail">
            <h1>{details.title}</h1>
            <p>by {details.author}</p>
            <div className="star_review">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarOutlineIcon />
              <button onClick={handleRatingClick}>Rate the book</button>
              {rating&&<RatingDrop/>}
            </div>
            <button>Get This Book</button>
          </div>
        </div>
        <div className="book_description">
          <p>
            {details.description}
          </p>
        </div>
        <hr />
        <div className="book_review">
          <h2>Reviews of this book</h2>
          <div className="review_details">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarOutlineIcon />
            <p>5/5 | Rating:4599 |Reviews:{reviews.reviewCount} </p>
          </div>
          <button onClick={handleReview}>Write your Review</button>
          {isCommentInput && <CommentField book={id} />}
        </div>
        <hr />
        {isReview?
          <>
            {
              reviews.reviews.map((data, i) => (
                  <CommentCard {...data} key={i} />
              ))
            }
          </>
        :<h5>No reviews yet</h5>}
        {isReview&&<button>Show More</button>}
      </div>
  );
}

export default ViewBook;
