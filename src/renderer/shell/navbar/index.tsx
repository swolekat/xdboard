import { Stack } from '@mantine/core';
import * as style from './navbar.module.css';

export const NavBar = () => {
  return (
    <Stack className={style.navbar} h='100%'>
      <div>Things that should go here</div>
      <ul>
        <li> Logo to go back to decks </li>
        <li> Connection status </li>
        <li> Voice? </li>
        <li> Integratiosn? </li>
        <li> About (maybe move to top menu) </li>
        <li> Discord ad? </li>
        <li> Version </li>
      </ul>
    </Stack>
  );
};
