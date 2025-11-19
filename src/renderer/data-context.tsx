import { v4 as uuidv4 } from 'uuid';
import { createContext, useState, useContext, useCallback } from 'react';
import { FAKEDATA } from './FAKE-DATA';

const DataContext = createContext({});

export function DataContextProvider({ children }) {
  const [decks, setDecks] = useState(FAKEDATA.decks);

  const addNewDeck = useCallback(() => {
    setDecks([
      ...decks,
      {
        deck_data: {
          background_color: 4210752.0,
          on: true,
          grid_y: 10.0,
          snap_grid: 1.0,
          background_image: '',
          encrypted: false,
          adaptive_resizing: 1.0,
          unique_id: `${uuidv4()}`,
          button_list: [],
          deck_name: 'Deck 2',
          grid_x: 10.0,
          stretch: 0.0,
        },
        unique_id: `${uuidv4()}`,
        include_image: {},
      },
    ]);
  }, [decks]);

  const changeDeckOn = useCallback(
    (deck_id) => {
      const newDecks = JSON.parse(JSON.stringify(decks)).map((d) => {
        if (d.unique_id !== deck_id) {
          return d;
        }
        return {
          ...d,
          deck_data: {
            ...d.deck_data,
            on: !d.deck_data.on,
          },
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
