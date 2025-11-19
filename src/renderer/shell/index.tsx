import { AppShell } from '@mantine/core';
import { NavBar } from './navbar';
import * as style from './shell.module.css';

export const Shell = ({ children }) => {
  return (
    <AppShell
      padding={0}
      header={{ height: 0 }}
      navbar={{
        width: 200,
        breakpoint: 'sm',
      }}
      className={style.content}
    >
      <AppShell.Navbar>
        <NavBar />
      </AppShell.Navbar>

      <AppShell.Main className={style.content}>{children}</AppShell.Main>
    </AppShell>
  );
};
