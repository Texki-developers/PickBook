import React from 'react'
import './ViewBook.scss'
import StarIcon from '@material-ui/icons/Star';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import CommentCard from './CommentCard/CommentCard'

const ViewBook = () => {

  const comments = [
    {
      name:'Amshen Yesudas',
      image:'https://avatars.githubusercontent.com/u/65121810?v=4',
      like:'5678',
      unlike:'124',
      comment:"Nick's been feeling the same, but he's got a lot on his mind - not least coming out to his dad, ajnd the fact that Charlie might have an eating disorder.",
  
    },
    {
      name:'Mushin',
      image:'https://avatars.githubusercontent.com/u/65121810?v=4',
      like:'1535',
      unlike:'124',
      comment:"Nick's been feeling the same, but he's got a lot on his mind - not least coming out to his dad, ajnd the fact that Charlie might have an eating disorder.",
  
    },{
      name:'Rishad',
      image:'https://avatars.githubusercontent.com/u/65121810?v=4',
      like:'9000',
      unlike:'124',
      comment:"Nick's been feeling the same, but he's got a lot on his mind - not least coming out to his dad, ajnd the fact that Charlie might have an eating disorder.",
  
    }
  ]


    return (
      <div className="viewbook_container">
        <div className="book_container">
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/410llGwMZGL._SX328_BO1,204,203,200_.jpg"
            alt=""
          />
          <div className="book_detail">
            <h1>The Alchemist</h1>
            <p>by Paulo Coelho's</p>
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
            Paulo Coelho's enchanting novel has inspired a devoted following
            around the world. This story, dazzling in its powerful simplicity
            and soul-stirring wisdom, is about an Andalusian shepherd boy named
            Santiago who travels from his homeland in Spain to the Egyptian
            desert in search of a treasure buried near the Pyramids. Along the
            way he meets a Gypsy woman, a man who calls himself king, and an
            alchemist, all of whom point Santiago in the direction of his quest.
            No one knows what the treasure is, or if Santiago will be able to
            surmount the obstacles in his path.
            But what starts out as a journey
            to find worldly goods turns into a discovery of the treasure found
            within. Lush, evocative, and deeply humane, the story of Santiago is
            an eternal testament to the transforming power of our dreams and the
            importance of listening to our hearts
          </p>
        </div>
        <hr/>
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
            <button>Write your Review</button>
        </div>
        <hr/>
        {
          comments.map((d,i)=>(
            <CommentCard {...d} key={i} />
          ))
        }
      </div>
    );
}

export default ViewBook;
