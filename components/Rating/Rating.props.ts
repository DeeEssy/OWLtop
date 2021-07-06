import { DetailedHTMLProps, HTMLAttributes } from "react";

interface RatingProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  rating: number;
  isEditable?: boolean;
  setRating?: (rating: number) => void;
}

export default RatingProps;
