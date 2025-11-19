import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { theme } from './theme';
import { Shell } from './shell';
import { DeckList } from './deck-list';
import { DataContextProvider } from './data-context';
import { DeckDetails } from './deck-details';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <DataContextProvider>
        <Shell>
          <Router>
            <Routes>
              <Route index element={<DeckList />} />
              <Route path=":deckId" element={<DeckDetails />} />
            </Routes>
          </Router>
        </Shell>
      </DataContextProvider>
    </MantineProvider>
  );
}
