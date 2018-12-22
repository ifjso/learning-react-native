import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from '../FlashCards/src_checkpoint_03/reducers';
import Flashcards from './src_checkpoint_03/components/Flashcards';

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <Flashcards />
  </Provider>
);

export default App;
