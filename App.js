import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import MainComponent from './mainComponent';

const AppNavigator = createStackNavigator({
  screen: MainComponent
})

export default createAppContainer(AppNavigator);