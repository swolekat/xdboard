import { v4 as uuidv4 } from 'uuid';
import { createContext, useState, useContext, useCallback } from 'react';
import { FAKEDATA } from './FAKE-DATAXD';

const FAKE_VERSION = '0.0.1',

const DataContext = createContext({});

export function DataContextProvider({ children }) {
  const [decks, setDecks] = useState(FAKEDATA.decks);

  const addNewDeck = useCallback(() => {
    setDecks([
      ...decks,
      {
        id: `${uuidv4()}`,
        name: 'New Deck',
        dimensions: {
          x: 10,
          y: 10,
        },
        backgroundColor: '#404040',
        on: true,
        createdWithVersion: FAKE_VERSION,
        buttons: [],
      },
    ]);
  }, [decks]);

  const changeDeckOn = useCallback(
    (id) => {
      const newDecks = JSON.parse(JSON.stringify(decks)).map((d) => {
        if (d.id !== id) {
          return d;
        }
        return {
          ...d,
          on: !d.on,
        };
      });
      setDecks(newDecks);
    },
    [decks],
  );

  const value = {
    addNewDeck,
    decks,
    changeDeckOn,
  };

  return <DataContext value={value}>{children}</DataContext>;
}

export const useDataContext = () => useContext(DataContext);
