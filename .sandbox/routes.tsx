import * as VisualizedIcon from '../src/components/VisualizedIcon/VisualizedIcon.stories';
import * as Sidebar from '../src/components/Sidebar/Sidebar.stories';
import * as NavLinks from '../src/components/NavLink/NavLinks.stories';
import * as NavLink from '../src/components/NavLink/NavLink.stories';
import * as ExitNavLink from '../src/components/NavLink/ExitNavLink.stories';
import * as LogoutModal from '../src/components/LogoutModal/LogoutModal.stories';
import * as DashboardHeader from '../src/components/Header/DashboardHeader.stories';
import * as FullPageLoader from '../src/components/FullPageLoader/FullPageLoader.stories';
import * as EmptyState from '../src/components/EmptyState/EmptyState.stories';
import * as DetailCard from '../src/components/DetailCard/DetailCard.stories';
import * as DashboardCard from '../src/components/DashboardCard/DashboardCard.stories';
import * as Breadcrumbs from '../src/components/Breadcrumbs/Breadcrumbs.stories';
import * as Badge from '../src/components/Badge/Badge.stories';
import * as Alert from '../src/components/Alert/Alert.stories';

import { RequiredBy } from "@fullstacksjs/toolbox";
import { Route } from "@tanstack/react-location";

  
interface SandboxRoute extends Omit<RequiredBy<Route, 'path'>, 'children'> {
  children: SandboxRoute[];
}

  export const routes: SandboxRoute[] = [
  {
      path: '/VisualizedIcon',
      children: Object.entries(VisualizedIcon)
        .map(([name, Com]) => {
          return typeof Com === 'function'
            ? // @ts-ignore
              { path: name, element: <Com {...Com.args} /> }
            : undefined;
        })
        .filter(Boolean) as SandboxRoute[],
    },
    {
      path: '/Sidebar',
      children: Object.entries(Sidebar)
        .map(([name, Com]) => {
          return typeof Com === 'function'
            ? // @ts-ignore
              { path: name, element: <Com {...Com.args} /> }
            : undefined;
        })
        .filter(Boolean) as SandboxRoute[],
    },
    {
      path: '/NavLinks',
      children: Object.entries(NavLinks)
        .map(([name, Com]) => {
          return typeof Com === 'function'
            ? // @ts-ignore
              { path: name, element: <Com {...Com.args} /> }
            : undefined;
        })
        .filter(Boolean) as SandboxRoute[],
    },
    {
      path: '/NavLink',
      children: Object.entries(NavLink)
        .map(([name, Com]) => {
          return typeof Com === 'function'
            ? // @ts-ignore
              { path: name, element: <Com {...Com.args} /> }
            : undefined;
        })
        .filter(Boolean) as SandboxRoute[],
    },
    {
      path: '/ExitNavLink',
      children: Object.entries(ExitNavLink)
        .map(([name, Com]) => {
          return typeof Com === 'function'
            ? // @ts-ignore
              { path: name, element: <Com {...Com.args} /> }
            : undefined;
        })
        .filter(Boolean) as SandboxRoute[],
    },
    {
      path: '/LogoutModal',
      children: Object.entries(LogoutModal)
        .map(([name, Com]) => {
          return typeof Com === 'function'
            ? // @ts-ignore
              { path: name, element: <Com {...Com.args} /> }
            : undefined;
        })
        .filter(Boolean) as SandboxRoute[],
    },
    {
      path: '/DashboardHeader',
      children: Object.entries(DashboardHeader)
        .map(([name, Com]) => {
          return typeof Com === 'function'
            ? // @ts-ignore
              { path: name, element: <Com {...Com.args} /> }
            : undefined;
        })
        .filter(Boolean) as SandboxRoute[],
    },
    {
      path: '/FullPageLoader',
      children: Object.entries(FullPageLoader)
        .map(([name, Com]) => {
          return typeof Com === 'function'
            ? // @ts-ignore
              { path: name, element: <Com {...Com.args} /> }
            : undefined;
        })
        .filter(Boolean) as SandboxRoute[],
    },
    {
      path: '/EmptyState',
      children: Object.entries(EmptyState)
        .map(([name, Com]) => {
          return typeof Com === 'function'
            ? // @ts-ignore
              { path: name, element: <Com {...Com.args} /> }
            : undefined;
        })
        .filter(Boolean) as SandboxRoute[],
    },
    {
      path: '/DetailCard',
      children: Object.entries(DetailCard)
        .map(([name, Com]) => {
          return typeof Com === 'function'
            ? // @ts-ignore
              { path: name, element: <Com {...Com.args} /> }
            : undefined;
        })
        .filter(Boolean) as SandboxRoute[],
    },
    {
      path: '/DashboardCard',
      children: Object.entries(DashboardCard)
        .map(([name, Com]) => {
          return typeof Com === 'function'
            ? // @ts-ignore
              { path: name, element: <Com {...Com.args} /> }
            : undefined;
        })
        .filter(Boolean) as SandboxRoute[],
    },
    {
      path: '/Breadcrumbs',
      children: Object.entries(Breadcrumbs)
        .map(([name, Com]) => {
          return typeof Com === 'function'
            ? // @ts-ignore
              { path: name, element: <Com {...Com.args} /> }
            : undefined;
        })
        .filter(Boolean) as SandboxRoute[],
    },
    {
      path: '/Badge',
      children: Object.entries(Badge)
        .map(([name, Com]) => {
          return typeof Com === 'function'
            ? // @ts-ignore
              { path: name, element: <Com {...Com.args} /> }
            : undefined;
        })
        .filter(Boolean) as SandboxRoute[],
    },
    {
      path: '/Alert',
      children: Object.entries(Alert)
        .map(([name, Com]) => {
          return typeof Com === 'function'
            ? // @ts-ignore
              { path: name, element: <Com {...Com.args} /> }
            : undefined;
        })
        .filter(Boolean) as SandboxRoute[],
    },
    
]