import React from "react";
import { NotificationsProvider } from "@mantine/notifications";
import {
  createMemoryHistory,
  ReactLocation,
  Router,
} from "@tanstack/react-location";
import { DecoratorFn, Parameters } from "@storybook/react";
import { ThemeProvider } from "../src/components/theme";

export const parameters: Parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators: DecoratorFn[] = [
  (Story, { args }) => {
    const router = args.router;
    const { layout, ...routes } = args.router ?? {};
    const Layout = layout ?? React.Fragment;
    const location = new ReactLocation({
      history: createMemoryHistory({ initialEntries: [router?.route ?? "/"] }),
    });

    return router ? (
      <Router routes={[routes]} location={location}>
        <Layout>
          <Story />
        </Layout>
      </Router>
    ) : (
      <Router routes={[]} location={location}>
        <Story />
      </Router>
    );
  },
  (Story) => (
    <ThemeProvider>
      <NotificationsProvider limit={3}>
        <Story />
      </NotificationsProvider>
    </ThemeProvider>
  ),
];
