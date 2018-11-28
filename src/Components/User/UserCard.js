import React from 'react'

import {Heading} from 'spectacle';

const UserCard = ({user}) => {
    const {name: {title, first, last},picture: {large}} = user
    return (
        <React.Fragment>
            <img className="rounded" src={large} alt="user img"/>
            <Heading size={3} textColor="primary">{title} {first} {last}</Heading>
        </React.Fragment>
    )
}

export default UserCard