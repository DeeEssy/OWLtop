import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface TagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  url?: string;
  className?: string;
  children: ReactNode;
  size?: "small" | "large";
  color?: "ghost" | "red" | "grey" | "green" | "primary";
}
