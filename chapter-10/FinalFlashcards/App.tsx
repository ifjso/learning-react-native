import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from './src/reducers';
import { readDecks } from './src/storage/decks';
import { loadData } from './src/actions/creators';
import Flashcards from './src/components/Flashcards';

const store = createStore(reducer);

readDecks().then(decks => store.dispatch(loadData(decks)));

const App = () => (
  <Provider store={store}>
    <Flashcards />
  </Provider>
);

export default App;
