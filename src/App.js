import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score : 0,
    highscore : 0
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  clickMemory = id => {
    const image= this.state.friends.filter(friend => friend.id  === id)
    console.log(image);
    console.log(image[0].clicked);
    if (image[0].clicked === true){
      let friends = this.state.friends.map(friend => {
        let friends = friend; 
        friends.clicked = false;
        return friends;
      })

      friends.sort(function(a, b){return 0.5 - Math.random()});

      this.setState({
        highscore : this.state.score,
        score: 0,
        friends
      });
    }
    else {
      console.log(this.state.friends)
      const friends = this.state.friends.map(friend => {
        if (friend.id === id ) {
          let clickedfriend = friend;
          clickedfriend.clicked = true;
          return clickedfriend;
        }
        else return friend;
      });
      console.log(friends)
      friends.sort(function(a, b){return 0.5 - Math.random()});
      this.setState({
         score: this.state.score + 1,
         friends
        });
    }
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title score={this.state.score}>Friends List</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.clickMemory}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
