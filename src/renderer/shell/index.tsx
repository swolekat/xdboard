import { AppShell } from '@mantine/core';
import { NavBar } from './navbar';
import * as style from './shell.module.css';
import { useLocation } from 'react-router-dom';

export const Shell = ({ children }) => {
  const location = useLocation();
  const collapsed = location.pathname !== '/';
  return (
    <AppShell
      padding={0}
      header={{ height: 0 }}
      navbar={{
        width: 200,
        breakpoint: 'sm',
        collapsed: {
          mobile: collapsed,
          desktop: collapsed,
        },
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
