import React,{useState,useEffect} from 'react'
import ExploreGrid from "../../components/ExploreGrid/ExploreGrid"
import { Container } from 'react-bootstrap';
import backend from "../../client";
export default function Explore() {
    const [loading, setLoading] = useState(false);

    return (
        <>
        {loading ? (<h1>Loading..</h1>) : (
        <Container className="mt-5">
            <ExploreGrid />
        </Container>
        )}
        </>
    )
}
