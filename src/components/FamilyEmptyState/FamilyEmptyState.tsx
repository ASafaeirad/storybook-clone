import { Button, useMantineTheme } from '@mantine/core';
import { EmptyState } from '../EmptyState';
import { PeopleIcon } from '../icons';

export const FamilyEmptyState = () => {
  const theme = useMantineTheme();
  return (
    <EmptyState
      icon={
        <PeopleIcon
          width="33"
          height="33"
          color={theme.colors.primaryEmphasized[6]}
        />
      }
      title={'۴۰۴'}
      message={'خانواده ای یافت نشد'}
    >
      <Button variant="filled">ساخت خانواده</Button>
    </EmptyState>
  );
};
