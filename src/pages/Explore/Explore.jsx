import React,{useState,useEffect} from 'react'
import ExploreGrid from "../../components/ExploreGrid/ExploreGrid"
import { Container } from 'react-bootstrap';
import backend from "../../client";
import { CircularProgress } from '@material-ui/core';
export default function Explore() {
    const [loading, setLoading] = useState(false);

    return (
        <>
        {loading ? (<CircularProgress />) : (
        <Container className="mt-5">
            <ExploreGrid />
        </Container>
        )}
        </>
    )
}
