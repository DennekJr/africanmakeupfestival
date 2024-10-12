import { OverridableComponent } from "@mui/types";
import { SvgIconTypeMap } from "@mui/material";

export type NavBarItem = {
  id: string;
  route: string;
  name: string;
  icon?: OverridableComponent<SvgIconTypeMap> & { muiName: string };
  disabled: boolean;
};
