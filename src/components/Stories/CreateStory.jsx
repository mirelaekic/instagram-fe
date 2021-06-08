import React, { useState, useEffect } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import { Avatar, Badge } from "@material-ui/core/";
import { Form } from "react-bootstrap";
import "./CreateStory.css";

const useStyles = makeStyles({
  Avatar: {
    width: 100,
    height: 100,
  },
});

export default function CreateStory(props) {
  const [video, setVideo] = useState();
  const INST_API = process.env.REACT_APP_INST_API
  const uploadVid = async () => {
    console.log("uploading");
    let formData = new FormData();
    formData.append("PostImage", video);
    try {
      const response = await fetch(INST_API+"/insta/story", {
        method: "POST",
        headers: { Accept: "application/json" },
        credentials: "include",
        body: formData,
      });
      if (response.ok) {
        setVideo();
        console.log("uploaded");
        props.fetchStory();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (video) {
      uploadVid();
    }
  }, [video]);

  const checkDuration = (vid) => {
    let video = document.createElement("video");
    video.preload = "metadata";

    video.onloadedmetadata = function () {
      window.URL.revokeObjectURL(video.src);
      let duration = video.duration;
      vid.duration = duration;
      console.log(vid);
      if (vid.duration <= 10) {
        setVideo(vid);
      }
    };
    video.src = URL.createObjectURL(vid);
  };

  const SmallIcon = withStyles((theme) => ({
    root: {
      width: 20,
      height: 20,
      color: "#fafafa",
      backgroundColor: "#0095f6",
      borderRadius: "100%",
      border: "solid 1px #fafafa",
    },
  }))(AddIcon);
  const classes = useStyles();
  return (
    <div>
      <React.Fragment>
        <div>
          <div>
            <Form.Group className="position-relative">
              <Form.Label className="booba" htmlFor="uploadStory">
                <Badge
                  overlap="circle"
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  badgeContent={<SmallIcon />}
                >
                  <Avatar
                    alt="Travis Howard"
                    src="http://placecorgi.com/260/180"
                    className={classes.Avatar}
                  />
                </Badge>
              </Form.Label>
              <Form.Control
                type="file"
                id="uploadStory"
                className="visually-hidden"
                accept="video/*"
                onChange={(e) => checkDuration(e.target.files[0])}
              />
            </Form.Group>
          </div>
        </div>
      </React.Fragment>
    </div>
  );
}
