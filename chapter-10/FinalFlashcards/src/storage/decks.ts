import { AsyncStorage } from 'react-native';
import Deck from '../data/Deck';

const read = async (key: string, deserializer: (serialized: Deck) => Deck) => {
  try {
    const val = await AsyncStorage.getItem(key);
    if (val !== null) {
      return JSON.parse(val).map((serialized: Deck) =>
        deserializer(serialized)
      );
    }

    console.info(`${key} not found on disk.`);
    return [];
  } catch (error) {
    console.warn(`AsyncStorage error: ${error.message}`);
  }
};

const write = async (key: string, item: Deck[]) => {
  try {
    return await AsyncStorage.setItem(key, JSON.stringify(item));
  } catch (error) {
    console.error(`AsyncStorage error: ${error.message}`);
  }
};

export const DECK_KEY = 'flashcards:decks';

export const readDecks = () => read(DECK_KEY, Deck.fromObject);

export const writeDecks = (decks: Deck[]) => write(DECK_KEY, decks);
