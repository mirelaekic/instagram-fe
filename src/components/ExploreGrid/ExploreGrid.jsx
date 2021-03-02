import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
//import tileData from './tileData';
import expl1 from "../../logo/exampleImg/expl1.jpg";
import expl2 from "../../logo/exampleImg/expl2.jpg";
import expl3 from "../../logo/exampleImg/expl3.jpg";
import expl4 from "../../logo/exampleImg/expl4.jpg";
import expl5 from "../../logo/exampleImg/expl5.jpg";
import expl6 from "../../logo/exampleImg/expl6.jpg";
import { Container, Row, Col } from "react-bootstrap";
import "./ExploreGrid.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    marginTop: "5rem",
  },
  gridList: {
    width: 800,
  },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 * */
const tileData = [
  {
    img: expl2,
    title: "Image",
    author: "author",
    cols: 1,
  },
  {
    img: expl2,
    title: "Image",
    author: "author",
    cols: 2,
  },
  {
    img: expl3,
    title: "Image",
    author: "author",
    cols: 1,
  },
  {
    img: expl4,
    title: "Image",
    author: "author",
    cols: 1,
  },
  {
    img: expl5,
    title: "Image",
    author: "author",
    cols: 1,
  },
  {
    img: expl6,
    title: "Image",
    author: "author",
    cols: 1,
  },
  {
    img: expl3,
    title: "Image",
    author: "author",
    cols: 1,
  },
  {
    img: expl4,
    title: "Image",
    author: "author",
    cols: 1,
  },
  {
    img: expl5,
    title: "Image",
    author: "author",
    cols: 1,
  },
  {
    img: expl2,
    title: "Image",
    author: "author",
    cols: 1,
  },
  {
    img: expl3,
    title: "Image",
    author: "author",
    cols: 1,
  },
  {
    img: expl4,
    title: "Image",
    author: "author",
    cols: 1,
  },
  {
    img: expl5,
    title: "Image",
    author: "author",
    cols: 1,
  },
  {
    img: expl5,
    title: "Image",
    author: "author",
    cols: 1,
  },
];

export default function ImageGridList() {
  const classes = useStyles();

  return (
    <Container>
      <Row className="exploreGrid">
        <Row className="mt-5">
          {/**In the columns below specify which exact media index to use(otherwise grid not working!) */}
          <Col lg={5}>
            <Col className="p-3">
              <img className="img-grid" src={tileData[5].img} />
            </Col>
            <Col className="p-3">
              <img className="img-grid" src={tileData[3].img} />
            </Col>
          </Col>
          <Col lg={7} className="p-3">
            <img className="img-grid" src={tileData[6].img} />
          </Col>
        </Row>
        <Row>
        {tileData.map((i) => (
          <Col lg={4} className="p-3">
            <img className="img-grid" src={i.img} />
          </Col>
        ))}
        </Row>
      </Row>
    </Container>
  );
}
