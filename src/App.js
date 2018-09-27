import React, { Component } from "react";
import MemoryImage from "./components/MemoryImage";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import ContentWrap from "./components/ContentWrap"
import images from "./images.json";
import "./App.css";

class App extends Component {
  // Setting this.state.images to the images json array
  state = {
    images,
    scores : {
      curr : 0,
      high : 0
    },
    clickResult: ""
  };

  wrongAnswer = () => {
    let images = this.state.images.map(friend => {
      let images = friend; 
      images.clicked = false;
      return images;
    })

    // Randomizes the images array
    images.sort(function(a, b){return 0.5 - Math.random()});

    // Grabs the scores
    let scores = this.state.scores

    // If the current score is higher than the high score update it
    if (scores.curr > scores.high){
      scores.high = scores.curr;
    }
    scores.curr = 0

    this.setState({
      scores,
      images,
      clickResult : "You Clicked The Same One!"
    });
  }

  correctAnswer = id => {
    const images = this.state.images.map(friend => {
      if (friend.id === id ) {
        // Updates the clicked friend clicked status
        let clickedfriend = friend;
        clickedfriend.clicked = true;

        return clickedfriend;
      }
      else return friend;
    });
    // Randomizes the array
    images.sort(function(a, b){return 0.5 - Math.random()});
    
    this.setState({
       scores: {
         curr : this.state.scores.curr + 1,
         high : this.state.scores.high
        },
       images,
       clickResult: "Correct!"
      });
  }

  clickMemory = id => {
    // Grabs the clicked image
    const image= this.state.images.filter(friend => friend.id  === id)

    // If the image has already been clicked
    if (image[0].clicked === true){
      this.wrongAnswer();
    }

    // If the Image hasn't already been clicked
    else {
      this.correctAnswer(id);
    }
  };

  // 
  render() {
    return (
      <div style={{backgroundImage: "url('./images/starring.png')"}}>
      <Title scores={this.state.scores} clickResult={this.state.clickResult}>Spirit Circle Memory Match</Title>
      <Wrapper>
        <ContentWrap>
        {this.state.images.map(friend => (
          <MemoryImage
            removeFriend={this.clickMemory}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
          />
        ))}
        </ContentWrap>
      </Wrapper>
      </div>
    );
  }
}

export default App;
