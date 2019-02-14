import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';

// import styles from './styles';

export default class ToDoListItemDetailsComponent extends Component {
  render() {
    const item = this.props.navigation.getParam('item');
    return (
      <View>
        <TextInput 
          value={item.title}
          // onChangeText={this.updateTitleValue}
        />
        <TextInput 
          value={item.description}
          // onChangeText={this.updateDescriptionValue}
        />
      </View>
    );
  }
}