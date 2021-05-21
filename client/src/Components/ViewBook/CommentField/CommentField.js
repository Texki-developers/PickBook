import React from 'react'
import './CommentField.scss'

const CommentField = () => {
    return (
        <form className="comment-field">
            <textarea name="comment" placeholder="Type your review here..." className="comment-input" id="" cols="30" rows="3"></textarea>
            <button type="submit" className="comment-submit">Submit</button>
        </form>
    )
}

export default CommentField;
