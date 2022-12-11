import { noop } from '@fullstacksjs/toolbox';
import type { CSSObject, Sx } from '@mantine/core';
import { NavLink as MantineNavLink } from '@mantine/core';
import { ExitIcon } from '../icons';
import { openLogoutModal } from '../LogoutModal';

import { exitNavLinkId as id } from './ExitNavLink.ids';
import { navLinkRootStyles } from './NavLink';

const rootStyles: Exclude<Sx, CSSObject> = theme => ({
  ...navLinkRootStyles(theme),
  '&:hover': {
    backgroundColor: theme.colors.red[0],
    color: theme.colors.red[6],
  },
});

export const ExitNavLink = () => {
  return (
    <MantineNavLink
      sx={rootStyles}
      label="خروج"
      rightSection={<ExitIcon />}
      onClick={() => openLogoutModal(noop)}
    />
  );
};
