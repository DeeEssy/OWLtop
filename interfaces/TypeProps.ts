import { MenuItem } from "./Menu.props";

export interface TypeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
