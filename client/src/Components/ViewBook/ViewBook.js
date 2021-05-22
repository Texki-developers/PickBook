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


const ViewBook = () => {
  var { id } = useParams();
  var [loading, setLoading] = useState(true)
  var [details, SetDetails] = useState({})
  const [isMessage, setIsMessage] = useState(false)
  const [isCommentInput, setIsCommentInput] = useState(false)
  const [reviews, setReviews] = useState(false)

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
        console.log(res);
        setReviews(res.data)
      })
    }
    getBook();
    getReviews();
  }, [])

  const handleReview = (event) => {
    event.preventDefault();
    if (essentials.userData) {
      setIsCommentInput(!isCommentInput);
    } else {
      console.log("message");
      setIsMessage(true)
      setTimeout(() => {
        setIsMessage(false)
      }, 3000)
    }
  }

  const comments = [
    {
      name: 'Amshen Yesudas',
      image: 'https://avatars.githubusercontent.com/u/65121810?v=4',
      like: '5678',
      unlike: '124',
      comment: "Nick's been feeling the same, but he's got a lot on his mind - not least coming out to his dad, ajnd the fact that Charlie might have an eating disorder.",

    },
    {
      name: 'Mushin',
      image: 'https://avatars.githubusercontent.com/u/65121810?v=4',
      like: '1535',
      unlike: '124',
      comment: "Nick's been feeling the same, but he's got a lot on his mind - not least coming out to his dad, ajnd the fact that Charlie might have an eating disorder.",

    }, {
      name: 'Rishad',
      image: 'https://avatars.githubusercontent.com/u/65121810?v=4',
      like: '9000',
      unlike: '124',
      comment: "Nick's been feeling the same, but he's got a lot on his mind - not least coming out to his dad, ajnd the fact that Charlie might have an eating disorder.",

    }
  ]


  return (
    loading ? <Loding /> :

      <div className="viewbook_container">
        {isMessage && <Message message="Please login to write review" link="/" linkText="Click here to login" color="red" />}
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
              <button>Rate the book</button>
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
            <p>5/5 | Rating:4599 |Reviews:3683 </p>
          </div>
          <button onClick={handleReview}>Write your Review</button>
          {isCommentInput && <CommentField book={id} />}
        </div>
        <hr />
        {reviews &&
          <>
            {
              reviews.map((data, i) => (
                <>
                  {data[0] ?
                  <CommentCard {...data} key={i} />
                :
                  <h5>No comments yet</h5>}
                  
                </>
              ))
            }
          </>
        }

        <button>Show More</button>
      </div>
  );
}

export default ViewBook;
