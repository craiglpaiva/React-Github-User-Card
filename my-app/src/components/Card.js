import React from 'react';


export default function Card(props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <h2>{props.username}</h2>
            <a href="https://github.com/craiglpaiva">{props.profile}</a>
            <h4>Followers {props.followers}</h4>
            <h4>Folowing  {props.following}</h4>
            <p>{props.bio}</p>
        </div>
    )
}  