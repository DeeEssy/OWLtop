import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export default interface PtagProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  children: ReactNode;
  fontSize?: number;
  padding?: string;
  margin?: string;
  className?: string;
}
