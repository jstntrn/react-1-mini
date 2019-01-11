import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){ //pass in props to contructor and super in order to reference event.target.value in this.setState. Not required if using arrows in events
    super(props)
    this.updatePicture = this.updatePicture.bind(this) //bind event handlers in class constructor, lets setState function with this. in the function
                                                        

    this.state = { //state is an object
      friends: [],
      picture: "",
      name: ""
    }
  }

  updatePicture(event) { //example of executing the function with the event and referencing event.target.value in the setState
    this.setState({ //setState is a method that gets passed in a object parameter, thus setState({})
      picture: event.target.value
    })  
  }

  updateName(value) { //example of being given value parameter from event handler which already retrieve e.target.value
    this.setState({
      name: value
    })
  }

  addFriend() {
    const {friends: newFriends, picture, name} = this.state; //object deconstructor, rename friends array
    newFriends.push({picture, name}) //push new friends entry to new array

    this.setState({
      friends: newFriends, //set friend state to new array
      picture: '', //reset value state of picture input box to blank string
      name: '' //reset value state of name input box to blank string
    })
    console.log(this.state.friends);
    
  }
  
  //creates display for array of friends
  //renders component, creating a div for each element
  //div requires key for parent div, contains image and span text, key needs to be unique identifier, this the use of index and name in string literal
  //.map(callback function(currentValue, index, array){return element for new array})
  render() {
    const friends = this.state.friends.map((friend, index) => (
      <div key={`friend-${index}-${friend.name}`}> 
        <img width="200px" src={friend.picture} alt="friend"/>
        <span>{friend.name}</span>
      </div>
    ));

    //arrow functions automatically binds this to event handler 
      // render() {
      //   return(
      //     <input 
      //       onChange={ (e) => this.handleOnChange(e) } />
      //     );
      // }
    //span used for inline text
    // {friends} after the button generates the friends component underneath the data input line
    

    return (
      <div>
        <label>Picture:</label>
        <input 
          onChange = {this.updatePicture} 
          value = {this.state.picture}/>

        <label>Name:</label>
        <input
          onChange = { (e) => this.updateName(e.target.value) }
          value = {this.state.name}/>

        <button
          onClick={ () => this.addFriend() }>Add Friend</button>
        {friends}
      </div>
    );
  }
}

export default App;
