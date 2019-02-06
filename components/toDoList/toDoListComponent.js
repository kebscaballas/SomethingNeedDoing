import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';

import styles from './styles';

import ToDoListItemComponent from './components/todoListItem/toDoListItemComponent';

export default class ToDoListComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      detailedView: null
    }

    this.viewDetailsHandler = this.viewDetailsHandler.bind(this);
  }

  viewDetailsHandler(id) {
    this.setState({
      ...this.state,
      detailedView: id
    });
  }

  render() {
    const listItems = this.props.toDoList.map((item, index) => {
      return (
        <ToDoListItemComponent viewDetailsHandler={this.viewDetailsHandler} detailedView={this.state.detailedView} key={index} id={index} item={item} />
      );
    });

    return (
      <View style={styles.scrollViewContainer}>
        {(this.props.toDoList.length > 0) ?
          <ScrollView style={styles.scrollView}>
            {listItems}
          </ScrollView>
          :
          <Text style={styles.emptyMessage}>Nothing to do.</Text>
        }
      </View>
    );
  }
}