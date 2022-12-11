import { Button, useMantineTheme } from "@mantine/core";
import { EmptyState } from "../EmptyState";
import { PackageIcon } from "../icons";

export const ProjectEmptyState = () => {
  const theme = useMantineTheme();

  return (
    <EmptyState
      icon={
        <PackageIcon
          width="33"
          height="33"
          color={theme.colors.primaryEmphasized[6]}
        />
      }
      title={"۴۰۴"}
      message={"پروژه ای یافت نشد"}
    >
      <Button variant="filled">ساخت پروژه</Button>
    </EmptyState>
  );
};
