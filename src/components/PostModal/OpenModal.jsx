import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { likePost } from "../../redux/actions/postsAction";
import PostModal from './PostModal';

export default function OpenModal(props) {
    const dispatch = useDispatch();
    const [like, setLike] = useState(false);

    const handleLike = (id) => {
        setLike(!like);
        dispatch(likePost(id));
      };
console.log("THE PROPS IN THE COMPONENT WHERE THE MODAL IS",props)
    return (
        <div>
            <PostModal
            post={props.post}
            handleClose={props.handleClose}
            ifLiked={like}
            open={props.open}
            like={() => handleLike(props.post.id)}
          /> 
        </div>
    )
}
