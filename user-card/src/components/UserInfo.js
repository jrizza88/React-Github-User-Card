import React from 'react';

const UserInfo = ({username}) => {
    return (
       <div> User Info: 
           {username.login}
           <img src={username.avatar_url} alt="me" />
           <ul>{username.login}</ul>
            <ul>{username.name}</ul>
            <ul>{username.location}</ul>
            <ul>{username.followers}</ul>
            <ul>{username.following}</ul>
           {/* {username.map(user => (
        <div>
            <ul>{user.login}</ul>
            <ul>{user.name}</ul>
            <ul>{user.location}</ul>
            <ul>{user.followers}</ul>
            <ul>{user.following}</ul>
        </div>
           ))} */}

       </div>
    )
}
export default UserInfo;