import { FaPencil } from "react-icons/fa6";
import { ActionIcon, Button, Group, Stack, Text } from '@mantine/core';
import * as style from './deck-details.module.css';
import { useParams } from 'react-router-dom';
import { useDataContext } from '../data-context';
import { DeckButton } from './deck-button';

export const DeckDetails = () =>  {
  const { deckId } = useParams();
  const {decks} = useDataContext();
  const matchingDeck = decks.find(({ unique_id }) => unique_id === deckId);

  const {deck_data} = matchingDeck;
  const {deck_name, grid_y, grid_x, button_list} = deck_data;

  return (
    <Stack className={style['deck-details']} gap={0}>
      <Group className={style.header} justify='space-between' p='md'>
        <Group>
          <Text fw='bold' fz='36px'>
            {deck_name}
          </Text>
          <ActionIcon
            aria-label="Gradient action icon"
          >
            <FaPencil />
          </ActionIcon>
        </Group>

        <Group>
          <Button color='gray'>
            Cancel
          </Button>
          <Button>
            Save
          </Button>
        </Group>
      </Group>
      <div className={style['grids-wrapper']}>
        {/*todo we need to have a grid of empty spaces that have empty space buttons that have a dropdown menu*/}
        {/*<div className={style['button-grid']} style={{ gridTemplateColumns: `repeat(${grid_x}, 1fr)`, gridTemplateRows: `repeat(${grid_y}, 1fr)` }}>*/}
        {/*  */}
        {/*</div>*/}
        <div className={style['button-grid']} style={{ gridTemplateColumns: `repeat(${grid_x}, 1fr)`, gridTemplateRows: `repeat(${grid_y}, 1fr)` }}>
          {button_list.map(b => (
            <DeckButton button={b} key={b.button_id} />
          ))}
        </div>
      </div>
    </Stack>
  );
};
