import React, { Component } from 'react';
import { View, Button, TextInput, Text } from 'react-native';

import styles from './styles';

export default class AddToDoItemFormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleValue: '',
      descriptionValue: ''
    };

    this.updateTitleValue = this.updateTitleValue.bind(this);
    this.updateDescriptionValue = this.updateDescriptionValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateTitleValue(value) {
    this.setState({
      ...this,
      titleValue: value
    });
  }

  updateDescriptionValue(value) {
    this.setState({
      ...this,
      descriptionValue: value
    });
  }

  handleSubmit() {
    const currentDate = new Date();
    const dateString = currentDate.getFullYear() + '-' + (currentDate.getMonth() + 1) + '-' + currentDate.getDate();
    this.props.addToDoHandler(this.state.titleValue, this.state.descriptionValue, dateString);
    this.setState({
      titleValue: '',
      descriptionValue: ''
    });
  }

  render() {
    return (
      <View>
        <Text>Title:</Text>
        <TextInput style={styles.field} value={this.state.titleValue} onChangeText={this.updateTitleValue} />
        <Text>Description:</Text>
        <TextInput style={styles.field} value={this.state.descriptionValue} onChangeText={this.updateDescriptionValue} />
        
        <Button onPress={this.handleSubmit} title="Add to List" />
      </View>
    );
  }
}