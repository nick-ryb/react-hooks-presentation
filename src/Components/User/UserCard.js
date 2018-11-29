import React from 'react'

import {Heading} from 'spectacle';

const UserCard = ({user}) => {
    const {name: { first, last},picture: {large}} = user
    return (
        <div className="flex-center">
            <img className="rounded mr-1" src={large} alt="user img"/>
            <Heading size={6} textColor="primary">{first} {last}</Heading>
        </div>
    )
}

export default UserCard