import React, { useState, useEffect } from "react";
import ExploreGrid from "../../components/ExploreGrid/ExploreGrid";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../../redux/actions/postsAction";
import Loader from "../../components/Loader/Loader"
export default function Explore() {
  const [selectedPost, setSelectedPost] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPost());
  }, []);
  const posts = useSelector((state) => state.post.posts);
  const loading = useSelector((state) => state.post.loading)
  const changePost = (id) => setSelectedPost(id);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container className="mt-5">
          <ExploreGrid changePost={changePost} selectedPost={selectedPost} />
        </Container>
      )}
    </>
  );
}
