import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CreateStory from "./CreateStory";
import Story from "./Story";

export default class Responsive extends Component {
  state = {
    display: true,
    width: "100%",
    stories: [],
  };

  componentDidMount = () => {
    this.fetchStories();
  };

  fetchStories = async () => {
    try {
      let response = await fetch("http://localhost:9001/insta/story", {
        credentials: "include",
      });
      let resp = await response.json();
      this.setState({ stories: resp });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    var settings = {
      dots: false,
      infinite: false,
      margin: 0,
      speed: 100,
      slidesToShow: 6,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: false,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            infinite: false,
            dots: false,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            dots: false,
          },
        },
      ],
    };
    return (
      <div
        style={{
          width: this.state.width,
        }}
      >
        <Slider {...settings}>
          <div>
            <CreateStory fetchStory={this.fetchStories} />
          </div>
          {this.state.stories.length > 0 &&
            this.state.stories.map((story) => (
              <div>
                <Story story={story} />
              </div>
            ))}
        </Slider>
      </div>
    );
  }
}
