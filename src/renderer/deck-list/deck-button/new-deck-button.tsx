import * as style from './deck-button.module.css';
import { useDataContext } from '../../data-context';

export const NewDeckButton = () => {
  const {addNewDeck} = useDataContext();
  return (
    <div className={style['deck-button']} onClick={addNewDeck}>
      New Deck
    </div>
  );
};
