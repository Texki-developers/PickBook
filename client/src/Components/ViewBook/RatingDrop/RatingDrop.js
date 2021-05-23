import React, { useState } from 'react'
import StarIcon from '@material-ui/icons/Star';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import './RatingDrop.scss'
import { useParams } from 'react-router-dom';
import instance from '../../../Assets/server/instance';
import { useSelector } from 'react-redux';
import Message from '../../Message/Message';

const RatingDrop = () => {
    const { id } = useParams();
    const [isMessage, setMessage] = useState(false);
    const [container, setContainer] = useState(true)
    const essentials = useSelector(state => state.essentials)

    const handleRating = (rate) => {
        setContainer(false);
        instance.post('/post-rating', { bookId: id, userId: essentials.userData.uid, rate: rate })
            .then(res => {
                console.log(res);
                setMessage(true)
               
            })
    }
    return (
        <div className={container?"rating-drop-container":"rating-drop-container-hide"}>

            {isMessage && <Message message="Rated!!" link="/book"/>}
            <ul>
                <li>
                    <button onClick={() => handleRating(1)}>
                        <StarIcon />
                        <StarOutlineIcon />
                        <StarOutlineIcon />
                        <StarOutlineIcon />
                        <StarOutlineIcon />
                    </button>


                </li>
                <li>
                    <button onClick={() => handleRating(2)}>
                        <StarIcon />
                        <StarIcon />
                        <StarOutlineIcon />
                        <StarOutlineIcon />
                        <StarOutlineIcon />
                    </button>

                </li>
                <li>
                    <button onClick={() => handleRating(3)}>
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarOutlineIcon />
                        <StarOutlineIcon />
                    </button>

                </li>
                <li>
                    <button onClick={() => handleRating(4)}>
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarOutlineIcon />
                    </button>

                </li>
                <li>
                    <button onClick={() => handleRating(5)}>
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default RatingDrop;
