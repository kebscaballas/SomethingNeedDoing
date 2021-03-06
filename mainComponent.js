import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import styles from './styles';

import ToDoListComponent from './components/toDoList/toDoListComponent';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: []
    }

    this.addToDoHandler = this.addToDoHandler.bind(this);
  }

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
      <View style={styles.container}>
        <ToDoListComponent toDoList={this.state.toDoList} />
        <Button title="Add Task" onPress={() => this.props.navigation.navigate('AddScreen', {
          addToDoHandler: this.addToDoHandler 
        })} />
      </View>
    );
  }
}
