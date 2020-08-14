import React from 'react';


class UserFollowers extends React.Component {
    render (){
        return (
<div>
        <img src={this.props.followers.avatar_url} alt="follower s pics"/>
          <div className="card-info">
            <h3 className="name">{this.props.followers.name}</h3>
            <p className="this.props.followersname">
              {this.props.followers.login}
            </p>
            <p className="location">
              Location: {this.props.followers.location}
            </p>
            <a href={this.props.followers.url}>
              Profile: {this.props.followers.url}
            </a>
            <p className="followers">
              Followers: {this.props.followers.followers}
            </p>
            <p className="following">
              Following: {this.props.followers.following}
            </p>
            <p className="bio">Bio: {this.props.followers.bio}</p>
            </div>
    </div>
        )
    }
}

export default UserFollowers;