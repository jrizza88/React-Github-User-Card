import React from 'react';
import UserInfo from "./UserInfo";

class UserCard extends React.Component {
    constructor(){
        super();
        this.state = {
            user: []
        }
    }

    componentDidMount(){
        console.log('component mounted')
        fetch('https://api.github.com/users/jrizza88')
        .then(res => res.json())
        .then(user => this.setState({user: user}))
        .catch(error => console.error(error))
    }

    render() {
        return (
            <div>
                <UserInfo username={this.state.user} />
            </div>
        )
    }
}

export default UserCard;