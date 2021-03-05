import React from "react";
import Stories from "react-insta-stories";
import { withRouter } from "react-router-dom";

class App extends React.Component {
  stories2 = [
    {
      url: this.props.match.params.url,
      type: "video",
    },
  ];
  render() {
    return (
      <div className="stories">
        <Stories
          loop
          width={432}
          height={768}
          keyboardNavigation
          defaultInterval={10000}
          stories={this.stories2}
          onStoryEnd={(s, st) => console.log("story ended", s, st)}
          onAllStoriesEnd={(s, st) => console.log("all stories ended", s, st)}
          onStoryStart={(s, st) => console.log("story started", s, st)}
        />
      </div>
    );
  }
}

export default withRouter(App);
