import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import MainComponent from './mainComponent';
import AddToDoItemComponent from './components/addToDoItem/addToDoItemComponent';
import ToDoListItemDetailsComponent from './components/toDoList/components/toDoListItemDetails/toDoListItemDetailsComponent';

const AppNavigator = createStackNavigator({
  // screen: MainComponent
  MainScreen: {
    screen: MainComponent
  }, 
  AddScreen: {
    screen: AddToDoItemComponent
  },
  DetailsScreen: {
    screen: ToDoListItemDetailsComponent
  }
}, {
  initialRouteName: 'MainScreen',

});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
}