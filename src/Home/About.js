import React from 'react';
import {useParams} from 'react-router-dom';

export default function About(){
    const {id} = useParams();
    return (<span>about id:  {id}</span>)
}