import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

import styles from './styles';

class ToDoListItemComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => this.props.navigation.navigate('DetailsScreen', {
          item: this.props.item
        })}
      >
        <Text
          style={styles.title}
        >{this.props.item.title}</Text>
        <Text>Date added: {this.props.item.dateAdded}</Text>
      </TouchableOpacity>
    );
  }
}

export default withNavigation(ToDoListItemComponent);