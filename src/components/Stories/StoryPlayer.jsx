import React from "react";
import Stories from "react-insta-stories";
import { useSelector } from "react-redux";

export default function StoryPlayer() {
  const users = useSelector(state => state.user.users)
  const filterStories = users.map(users => {
    return users.stories.imgurl
  })
  console.log(filterStories)
  const stories2 = [
    {
      url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      type: "video",
    },
  ];
  console.log(users, "the users in the player");
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
