import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import MainComponent from './mainComponent';
import AddToDoItemComponent from './components/addToDoItem/addToDoItemComponent';

const AppNavigator = createStackNavigator({
  // screen: MainComponent
  MainScreen: {
    screen: MainComponent
  }, 
  AddScreen: {
    screen: AddToDoItemComponent
  }
}, {
  initialRouteName: 'MainScreen',

});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  addToDoHandler(title, description, dateAdded) {
    this.setState({
      ...this.state,
      toDoList: [
        ...this.state.toDoList,
        {
          title,
          description,
          dateAdded
        }
      ]
    }, () => {alert('Successfully added to list!')});
  }
  
  render() {
    return (
      <AppContainer />
    );
  }
}