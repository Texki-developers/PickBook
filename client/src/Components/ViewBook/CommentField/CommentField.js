import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import instance from '../../../Assets/server/instance'
import Message from '../../Message/Message'
import './CommentField.scss'

const CommentField = (props) => {
    const essentials = useSelector(state => state.essentials)
    const [message,setMessage] = useState(null)
    // const [isEmpty,setIsMessage] = useState(false)

    const handleCommentSubmit = (event) => {
        event.preventDefault();
        const data = {
            review : event.target[0].value,
            bookId : event.target[0].id,
            reviewer: essentials.userData.uid
        }
        window.location.reload()
        if(data.review!==''){
            instance.post('/add-comment',data).then((response) => {
                setMessage(response.data.message);
                event.target[0].value = "";
                setTimeout(() => {
                    setMessage(null)
                },2000)
            })
        }
    }
    return (
        <form className="comment-field" onSubmit={handleCommentSubmit}>
            {message && <Message message={message} color="green"/>}
            <textarea name="comment" placeholder="Type your review here..." className="comment-input" id={props.book} cols="30" rows="3"></textarea>
            <button type="submit" className="comment-submit">Submit</button>
        </form>
    )
}

export default CommentField;
