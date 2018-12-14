import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Logo from './Header/logo';
import DeckScreen from './DeckScreen';
import CardScreen from './CardScreen';
import ReviewScreen from './ReviewScreen';

const headerOptions = {
  headerStyle: { backgroundColor: '#FFFFFF' },
  headerLeft: <Logo />
};

const navigator = createStackNavigator({
  Home: { screen: DeckScreen, navigationOptions: headerOptions },
  Review: { screen: ReviewScreen, navigationOptions: headerOptions },
  CardCreation: { screen: CardScreen, navigationOptions: headerOptions }
});

export default navigator;
