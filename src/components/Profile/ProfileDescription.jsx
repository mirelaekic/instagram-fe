import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Row, Col } from "react-bootstrap";
import SettingsModal from "./SettingsModal";
import EditProfile from "./EditProfile";
import { useSelector } from "react-redux";
import { CircularProgress } from "@material-ui/core";

const useStyles = makeStyles({
  settingButton: {
    cursor: "pointer",
  },
  username:{
    fontWeight: "300",
    fontSize: "27px"
  },
  span:{
    display:"flex",
    marginRight:"20px",
    fontWeight:"500",
    fontSize:"16px"
  }
});
export default function ProfileDescription({sorted}) {
  const classes = useStyles();
  const user = useSelector(state => state.user.user)
  const currentUser = useSelector(state => state.user.currentUser)
  const loading = useSelector(state => state.user.loading)
  
  return loading ? (<div>. . .</div>) :
  user.posts ? (
    <div>
      <Container>
       <Row>
          <Col xs={12}>
            <Row className="d-flex align-items-center ">
              <Col className="d-flex align-items-center" xs={12}>
                <div className={classes.username}>
                {sorted.username}
                </div>
                 {currentUser.id === sorted.id ? 
                 <>
                 <span className="ml-3">
                  <EditProfile
                  />
                </span> 
                 <span className="ml-3">
                  <SettingsModal />
                </span>
                  </> : <div></div>}
              </Col>
            </Row>
               <Row className=" mt-4">
              <Col className="col-12 d-flex">
                 <span className={classes.span}>
                  <p><strong>{sorted.posts.length}</strong> posts</p>
                </span>
                <span className={classes.span}>
                  <p><strong>{sorted.followers.length}</strong> followers</p>
                </span>
                <span className={classes.span}>
                  <p><strong>{sorted.follows.length}</strong> following</p>
                </span>  
              </Col>
            </Row>   
            <Row className=" align-items-center mt-4">
              <Col>
                <b>{sorted.name}</b>
              </Col>
            </Row>
            <Row className=" align-items-center mt-2">
              <Col>
                <p>{sorted.gender}</p>
              </Col>
            </Row>
          </Col>
        </Row> 
      </Container>
    </div>
  ) : <CircularProgress />;
}
