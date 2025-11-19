import * as style from './deckList.module.css';
import { useDataContext } from '../data-context';
import { DeckButton } from './deck-button';
import { NewDeckButton } from './deck-button/new-deck-button';

export const DeckList = () =>  {
  const {decks} = useDataContext();
  return (
    <div className={style.grid}>
      {decks.map((deck) => (<DeckButton deck={deck} key={deck.id} />))}
      <NewDeckButton />
    </div>
  );
};
