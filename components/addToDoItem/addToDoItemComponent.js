import React, { Component } from 'react';
import { View } from 'react-native';

import styles from './styles';

import AddToDoItemFormComponent from './components/addToDoItemFormComponent';

export default class AddToDoItemComponent extends Component {
  render() { 
    return(
      <View style={styles.container}>
        <AddToDoItemFormComponent addToDoHandler={this.props.addToDoHandler}/>
      </View>
    );
  }
}