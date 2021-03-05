import React from "react";
import Stories from "react-insta-stories";
import { withRouter } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="stories">
        <Stories
          loop
          width={432}
          height={768}
          keyboardNavigation
          defaultInterval={10000}
          stories={stories2}
          onStoryEnd={(s, st) => console.log("story ended", s, st)}
          onAllStoriesEnd={(s, st) => console.log("all stories ended", s, st)}
          onStoryStart={(s, st) => console.log("story started", s, st)}
        />
      </div>
    );
  }
}

const stories2 = [
  {
    url:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    type: "video",
  },
];

export default withRouter(App);
