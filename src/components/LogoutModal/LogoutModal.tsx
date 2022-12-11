import type { noop } from "@fullstacksjs/toolbox";
import { openConfirmModal } from "@mantine/modals";
import { LogoutConfirm } from "./LogoutConfirm";
import { logoutModalIds as ids } from "./LogoutModal.ids";

export const openLogoutModal = (logout: typeof noop) =>
  openConfirmModal({
    modalId: ids.modal,
    children: <LogoutConfirm />,
    title: "خروج",
    size: "md",
    centered: true,
    labels: { cancel: "لغو", confirm: "خارج شوید" },
    groupProps: {
      spacing: 20,
      sx: {
        flexDirection: "row-reverse",
      },
    },
    confirmProps: {
      variant: "filled",
      color: "red",
    },
    cancelProps: {
      variant: "filled",
      color: "gray",
    },
    onConfirm: logout,
  });
