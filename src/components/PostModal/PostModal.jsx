import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Col, ListGroup,ListGroupItem, Row } from 'react-bootstrap';
import "./PostModal.css"

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '0px solid #000',
    boxShadow: theme.shadows[5],
    padding: "0px",
  },
}));

export default function TransitionsModal(post) {

  console.log(post.post, "this is the info of the post")
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
                  <Col >
                  <img className="modalimg" src={post.post.imgurl} />
                  </Col>
                  <Col >
                    <ListGroup>
                      <ListGroupItem>{post.post.user.username}</ListGroupItem>
                      {post.post.description === null ? <ListGroupItem>{post.post.description}</ListGroupItem> : <div></div>}
                      
                      {post.post.comments.map((c,i) => (
                        <ListGroupItem key={i}><strong>{c.user.username}</strong> {c.text}</ListGroupItem>
                      ) )}
                    </ListGroup>
                  </Col>
              </Row>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}