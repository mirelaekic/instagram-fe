import AddBoxOutlinedIcon from "@material-ui/icons/AddBoxOutlined";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { IconButton } from "@material-ui/core";
import { Col, FormControl, Row } from "react-bootstrap";
import PublishSharpIcon from "@material-ui/icons/PublishSharp";
import CheckSharpIcon from "@material-ui/icons/CheckSharp";
import {uploadPost} from "../../redux/actions/postsAction";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
const dispatch = useDispatch()
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton onClick={handleOpen}>
        <AddBoxOutlinedIcon />
      </IconButton>
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
            <div className="form-group">
              <input type="file" id="avatar"
                  name="avatar"
                  accept="image/png, image/jpeg"
                  />
            </div>
            <strong>New Post</strong>
            <Row>
              <Col lg={8}>
                <FormControl
                  rows={3}
                  className="mt-2"
                  type="text"
                  placeholder="Description..."
                />
              </Col>
              <Col lg={4}>
                <IconButton onClick={(event) => dispatch(uploadPost(event))}>
                  <CheckSharpIcon />
                </IconButton>{" "}
              </Col>
            </Row>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
