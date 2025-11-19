import { Link } from "react-router";
import classnames from "classnames";
import * as style from './deck-button.module.css';
import { Checkbox, Stack, Text } from '@mantine/core';
import { useDataContext } from '../../data-context';
import { useState } from 'react';

export const DeckButton = ({deck}) => {
  const {changeDeckOn} = useDataContext();
  const {name, id, backgroundColor, on} = deck;

  return (
    <Link to={`/${id}`} className={style.link}>
      <Stack className={classnames(style['deck-button'], {[style.off]: !on})} justify='space-between' gap='sm'>
        <Text ta='center' fw='bold' size='xl'>{name}</Text>
        <Text className={style['deck-preview']} bg={backgroundColor}>
        </Text>
        <div
          onClick={(e) => {
            changeDeckOn(id);
            e.preventDefault();
          }}
        >
          <Checkbox
            label="Disabled"
            checked={!on}
          />
        </div>
      </Stack>
    </Link>
  );
};
