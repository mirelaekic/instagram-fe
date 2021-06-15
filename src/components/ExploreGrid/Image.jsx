import React, { useState } from 'react'
import PostModal from '../PostModal/PostModal';
import "./ExploreGrid.css"
export default function Image(props) {
    const [open, setOpen] = useState(false);
    const selected = () => {
        setOpen(true)
    }
    const handleClose = (event, reason) => {
        setOpen(false)
        if (reason === 'clickaway') {
          return;
        }
    }
    return (
        <div key={props.id} onClick={selected}>
            <img src={props.imgurl} />
            <PostModal id={props.id} handleClose={handleClose} post={props} open={open} />
        </div>
    )
}
