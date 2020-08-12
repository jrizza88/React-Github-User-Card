import React from 'react';

const UserInfo = ({username, name, location, followers, following}) => {
    return (
       <div> User Info: 
            <ul>{username}</ul>
            <ul>{name}</ul>
            <ul>{location}</ul>
            <ul>{followers}</ul>
            <ul>{following}</ul>
       </div>
    )
}
export default UserInfo;