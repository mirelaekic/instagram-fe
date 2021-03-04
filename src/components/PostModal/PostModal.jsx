import React,{useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Typography from "@material-ui/core/Typography";
import { Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import "./PostModal.css";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import FavoriteBorderOutlined from "@material-ui/icons/FavoriteBorderOutlined";
import BookmarkBorderSharp from "@material-ui/icons/BookmarkBorderSharp";
import ModeCommentOutlinedIcon from "@material-ui/icons/ModeCommentOutlined";
import EmojiEmotionsOutlinedIcon from "@material-ui/icons/EmojiEmotionsOutlined";
import Moment from "react-moment";
import { useDispatch, useSelector } from "react-redux";
import {
  postComment, getPost,} from "../../redux/actions/postsAction";
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "0px solid #000",
    boxShadow: theme.shadows[5],
    padding: "0px",
  },
}));

export default function TransitionsModal(post) {
  console.log(post.post, "this is the info of the post");
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [text, setText] = useState("");
  
  
  const handleOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };

const dispatch = useDispatch()

  const handleComment = async () => {
   /* await dispatch(postComment(text, post.post.id));
    dispatch(getPost());
    setText("");*/
  };
  console.log(handleComment())
  return (
    <div>
      <button className="ViewComments" type="button" onClick={handleOpen}>
        View all number comments
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Row>
              <div className="imageModal">
                <img className="modalimg" src={post.post.imgurl} />
              </div>
              <div className="commModal">
                <ListGroup className="commentInModal">
                  <ListGroupItem>
                    <Avatar
                      alt={post.post.user.username}
                      src={post.post.user.imgurl}
                    />
                    <strong> {post.post.user.username}</strong>
                  </ListGroupItem>
                  <div className="commentList">
                    {post.post.comments.map((c, i) => (
                      <div className="middleDiv">
                        {post.post.description === null ? (
                          <ListGroupItem>{post.post.description}</ListGroupItem>
                        ) : (<> </>
                        )}
                        <ListGroupItem key={i}>
                          <Avatar
                            alt={c.user.username}
                            src={c.user.username}
                            className="mr-2"
                          />
                          <strong>{c.user.username}</strong>{" "}
                          <p className="commentText ml-2">{c.text}</p>
                        </ListGroupItem>
                        <p className="dateOfComment text-muted"><Moment fromNow>{c.updatedAt}</Moment></p>
                      </div>
                    ))}
                  </div>
                </ListGroup>
                <div className="commentAction">
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteBorderOutlined />
                    </IconButton>
                    <IconButton aria-label="comment">
                      <ModeCommentOutlinedIcon />
                    </IconButton>
                    <IconButton>
                      <BookmarkBorderSharp />
                    </IconButton>
                    {post.post.likes.length > 0 ? (
              <Typography paragraph className="likedLength text-muted">
                Liked by {post.post.likes.length}{" "}
              </Typography>
            ) : (
              <Typography paragraph></Typography>
            )}
                  </CardActions>
                  <div className="commentSection">
                    <EmojiEmotionsOutlinedIcon />
                    <input
                      id="text"
                      onChange={(e) => setText(e.target.value)}
                      className="commentInput"
                      type="text"
                      placeholder="Add a comment..."
                    />
                    <button onClick={handleComment}>Post</button>
                  </div>
                </div>
              </div>
            </Row>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
