import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';

import styles from './styles';

import ToDoListItemComponent from './components/todoListItem/toDoListItemComponent';

export default class ToDoListComponent extends Component {
  render() {
    return (
      <View style={styles.scrollViewContainer}>
        {(this.props.toDoList.length > 0) ?
          <FlatList
            data={this.props.toDoList}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => ( <ToDoListItemComponent viewDetailsHandler={this.viewDetailsHandler} item={item} id={index} /> )}
          />
          :
          <Text style={styles.emptyMessage}>Nothing to do.</Text>
        }
      </View>
    );
  }
}