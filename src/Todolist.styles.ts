import { SxProps } from "@mui/material/styles";

export const filterButtonsContainerSx: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  gap: "10px",
};

export const getListItemSx=(isDone:boolean): SxProps => ({
  padding: 0,
  justifyContent: "space-between",
  opacity: isDone ? 0.5 : 1,
});
