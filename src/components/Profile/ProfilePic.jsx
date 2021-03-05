import React, { useState, useEffect } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { postProfileImage } from "../../redux/actions/usersActions";
import { Avatar, IconButton } from "@material-ui/core/";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
const mapStateToProps = (state) => state;
const useStyles = makeStyles({
  Avatar: {
    width: 175,
    height: 175,
  },
  input: {
    display: "none",
  },
});

function ProfilePic(props) {
  console.log("this are props", props);
  const [image, setImage] = useState();
  const postProfileImage = (e, userId) => {
    return async () => {
      let formData = new FormData();
      formData.append("ProfilePic", e);
      try {
        const res = await fetch(`/insta/users/${userId}/upload`, {
          method: "PUT",
          headers: { Accept: "application/json" },
          credentials: "include",
          body: formData,
        });
        if (res.ok) {
          const posted = await res.json();
          console.log(posted, "posted");
        }
      } catch (error) {
        console.log(error);
      }
    };
  };
  useEffect(() => {
    postProfileImage(image);
  }, [image]);
  const classes = useStyles();
  console.log(image, "img");
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
              <Avatar
                component="span"
                alt="Travis Howard"
                src="http://placecorgi.com/260/180"
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
