/** @format */

import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar } from "@material-ui/core/";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PublishIcon from '@material-ui/icons/Publish';
import { getMe } from "../../redux/actions/usersActions";
const mapStateToProps = (state) => state;
const useStyles = makeStyles({
  Avatar: {
    width: 175,
    height: 175,
    "&:hover": {
      cursor:"pointer",
      backgroundColor:"rgb(0 0 0 / 6%)"
    }
  },
  input: {
    display: "none",
  },
  icon:{
    position:"absolute",
    left:"33%",
    top:"26%",
    zIndex:"999",
    width:"5em",
    height:"5em",
    display:"none",
    "&:hover":{
       cursor:"pointer",
       display:"block"
     }
  }

});

function ProfilePic(props) {

  const [image, setImage] = useState();
  const INST_API = process.env.REACT_APP_INST_API
  const user = useSelector(state => state.user.currentUser)
  const dispatch = useDispatch()
  const postProfileImage = async (e, userId) => {
    let formData = new FormData();
    formData.append("ProfilePic", e);
    try {
      const res = await fetch(
        `${INST_API}/insta/users/${user.id}/upload`,
        {
          method: "PUT",
          headers: { Accept: "application/json" },
          credentials: "include",
          body: formData,
        }
        );
      if (res.ok) {
        await res.json();
        dispatch(getMe())
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    postProfileImage(image);
  }, [image]);
  const classes = useStyles();
  return (
    <div>
      <React.Fragment>
        <div>
          <div>
              <input
              accept="image/*"
              className={classes.input}
              id="icon-button-file"
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
            />
            <label htmlFor="icon-button-file">
              <PublishIcon className={classes.icon} />
              <Avatar
                component="span"
                alt={user.name}
                src={user.imgurl}
                className={classes.Avatar}
                />
            </label>
          </div>
        </div>
      </React.Fragment>
    </div>
  );
}
export default withRouter(connect(mapStateToProps)(ProfilePic));
