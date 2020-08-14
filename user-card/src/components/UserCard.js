import React from 'react';
import UserInfo from "./UserInfo";
import UserFollowers from "./UserFollowers";

class UserCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user: [],
            followers: []
        }
    }

    componentDidMount(){
        console.log('component mounted')
        fetch('https://api.github.com/users/jrizza88')
        .then(res => res.json())
        .then(user => this.setState({user: user}))
        .catch(error => console.error(error))

        console.log('followers component mounted')
        fetch(`https://api.github.com/users/jrizza88/followers`)
        .then(res => res.json())
        .then(follower => this.setState({followers: follower}))
        .catch(error => console.error(error))
    }

    render() {
        
        return (
            <div>
                <UserInfo username={this.state.user} />
                {
                        this.state.followers.map(follower => (
                        <UserFollowers followers={follower} />
                    ))
                }
                
            </div>
        )
    }
}

export default UserCard;