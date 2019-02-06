import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from './styles';

export default class ToDoListItemComponent extends Component {
  constructor(props) {
    super(props);
    this.handlePress = this.handlePress.bind(this);
  }

  handlePress() {
    if(this.props.id === this.props.detailedView) {
      this.props.viewDetailsHandler(null);
    }
    else {
      this.props.viewDetailsHandler(this.props.id);
    }
  }

  render() {
    var details = (this.props.id === this.props.detailedView) ? 
      <View>
        <Text>Date added: {this.props.item.dateAdded}</Text>
        <Text>Description: {this.props.item.description}</Text>
      </View> :
      null;

    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={this.handlePress}
      >
        <Text
          style={styles.title}
        >{this.props.item.title}</Text>
        {details}
      </TouchableOpacity>
    );
  }
}