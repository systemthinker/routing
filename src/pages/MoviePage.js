import React from 'react';
import { useParams } from "react-router-dom";

export default function MoviePage(){
    const route_parameters = useParams();
    
    return <p>{"went too deep"}</p>
}