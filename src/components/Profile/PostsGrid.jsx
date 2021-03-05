import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function PostsGrid(props) {
  return (
    <Container>
      <Row className="exploreGrid">
        {props.posts.map((post, i) => (
          <Col lg={4} key={i} className="p-3">
            <img className="img-grid" src={post.imgurl} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
