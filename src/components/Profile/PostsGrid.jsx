import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./PostsGrid.css"
export default function PostsGrid(props) {
  console.log(props,"THE PROPS IN THE POST GRID PROFIEL")
  return (
    <Container>
      <Row className="exploreGrid">
        {props.posts.map((post, i) => (
          <Col lg={4} key={i} className="posts-col">
            <img className="img-grid" src={post.imgurl} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
