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
    scores : {
      curr : 0,
      high : 0
    }
  };

  clickMemory = id => {
    // Grabs the clicked image
    const image= this.state.friends.filter(friend => friend.id  === id)

    // If the image has already been clicked
    if (image[0].clicked === true){
      let friends = this.state.friends.map(friend => {
        let friends = friend; 
        friends.clicked = false;
        return friends;
      })

      // Randomizes the friends array
      friends.sort(function(a, b){return 0.5 - Math.random()});

      // Grabs the scores
      let scores = this.state.scores

      // If the current score is higher than the high score update it
      if (scores.curr > scores.high){
        scores.high = scores.curr;
      }
      scores.curr = 0

      this.setState({
        scores,
        friends
      });
    }

    // If the Image hasn't already been clicked
    else {

      const friends = this.state.friends.map(friend => {
        if (friend.id === id ) {
          // Updates the clicked friend clicked status
          let clickedfriend = friend;
          clickedfriend.clicked = true;

          return clickedfriend;
        }
        else return friend;
      });
      // Randomizes the array
      friends.sort(function(a, b){return 0.5 - Math.random()});

      this.setState({
         scores: {
           curr : this.state.scores.curr + 1,
           high : this.state.scores.high
          },
         friends
        });
    }
  };

  // 
  render() {
    return (
      <Wrapper>
        <Title scores={this.state.scores}>Friends List</Title>
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
