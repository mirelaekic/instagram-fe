import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Col, Row } from 'react-bootstrap';
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

export default function TransitionsModal(props) {

  console.log(props, "this is the id of the pic")
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
                  <Col>
                  <img src="https://th.bing.com/th/id/OIP.A79oMqjZkGecXPE1tUmnxQHaEK?pid=ImgDet&rs=1" />
                  </Col>
                  <Col>
                  
                  </Col>
              </Row>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}