import AddBoxOutlinedIcon from "@material-ui/icons/AddBoxOutlined";
import React,{useState, useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { IconButton, Button } from "@material-ui/core";
import { Col, FormControl, Row } from "react-bootstrap";
import PublishSharpIcon from "@material-ui/icons/PublishSharp";
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import {uploadPost} from "../../redux/actions/postsAction";
import { useDispatch } from "react-redux";
import "./PostImage.css"
import AddIcon from '@material-ui/icons/Add';
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
  title:{
    fontSize:"25px",
    textAlign:"center"
  }
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [image, setImage] = useState()
  const [url,setUrl] = useState()
  useEffect(() => {
      setUrl(image ? URL.createObjectURL(image) : null) 
  },[image])
const dispatch = useDispatch()
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setUrl("")
  };
  const uploadImg = () => {
    dispatch(uploadPost(image))
    setOpen(false)
    setUrl("")
  }
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
              <strong className={classes.title}>New Post</strong>
            <div className="form-group">
              <label className="custom-file-upload" for="file-upload">
               {url ? <img className="image-preview" src={url} alt="image to upload" /> : <div>upload <AddIcon /></div>}
              </label>
              <input id="file-upload" type="file" id="image"
                  name="image"
                  accept="image/png, image/jpeg"
                  onChange={(e) => setImage(e.target.files[0])}
                  />
            </div>
            <div classNam="upload-section">
                <Button className="upload-button" onClose={handleClose} onClick={() => uploadImg()}>
                  Post
                </Button>{" "}
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
