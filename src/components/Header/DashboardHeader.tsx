import { Group } from "@mantine/core";
import { useMatches } from "@tanstack/react-location";

import { BreadcrumbItem, Breadcrumbs } from "../Breadcrumbs";
import { dashboardHeaderId as ids } from "./DashboardHeader.ids";

export interface HeaderProps {
  button: React.ReactNode;
}

export const useBreadcrumbsItems = (): BreadcrumbItem[] => {
  const matches = useMatches();

  // @ts-ignore
  return matches
    .filter((match) => Boolean(match.route?.meta?.breadcrumb))
    .filter((match) => Boolean(match.route?.path))
    .map((match) => {
      const { path, meta } = match.route;
      return {
        path: path!,
        name: meta!.breadcrumb,
      };
    });
};

export const DashboardHeader = ({ button }: HeaderProps) => {
  const items = useBreadcrumbsItems();

  return (
    <Group position="apart" mb={40}>
      <Breadcrumbs basePath="/dashboard" items={items} />
      {button}
    </Group>
  );
};
