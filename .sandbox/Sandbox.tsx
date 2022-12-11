import ReactDOM from 'react-dom/client';
import React from 'react';
import { ThemeProvider } from '../src/components/theme';
import { NotificationsProvider } from '@mantine/notifications';
import { ModalsProvider } from '@mantine/modals';
import {
  Link,
  LinkProps,
  Outlet,
  ReactLocation,
  Router,
  useLocation,
} from '@tanstack/react-location';
import { Box, NavLink, NavLinkProps } from '@mantine/core';
import {
  joinPath,
  removeLeadingSlashes,
} from '@fullstacksjs/toolbox';
import { routes } from './routes';

const root = ReactDOM.createRoot(document.getElementById('root')!);

const Providers = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider>
    <NotificationsProvider limit={3}>
      <ModalsProvider>{children}</ModalsProvider>
    </NotificationsProvider>
  </ThemeProvider>
);

const location = new ReactLocation();

const RouterNavLink = (props: NavLinkProps & LinkProps) => {
  const {
    current: { pathname },
  } = useLocation();

  return (
    <NavLink
      component={Link}
      {...props}
      active={removeLeadingSlashes(props.to ?? '') === removeLeadingSlashes(pathname)}
    />
  );
};

const Sandbox = () => (
  <Providers>
    <Router routes={routes} location={location}>
      <Box sx={{ display: 'flex' }}>
        <Box sx={{ flex: 1, padding: 20 }}>
          <Outlet />
        </Box>
        <Box
          sx={{
            padding: '20px 0 20px 20px',
            direction: 'ltr',
            display: 'flex',
            flexDirection: 'column',
            width: '250px',
            maxHeight: '100vh',
            overflow: 'auto',
          }}
        >
          {routes.map(parent => (
            <NavLink label={removeLeadingSlashes(parent.path)}>
              {parent.children?.map(child => (
                <RouterNavLink
                  to={joinPath(parent.path, child.path)}
                  label={child.path}
                ></RouterNavLink>
              ))}
            </NavLink>
          ))}
        </Box>
      </Box>
    </Router>
  </Providers>
);

root.render(<Sandbox />);
