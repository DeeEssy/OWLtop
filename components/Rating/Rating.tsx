import styles from "./Rating.module.scss";
import { useState, useEffect, KeyboardEvent } from "react";
import cn from "classnames";
import RatingProps from "./Rating.props";
import { Star } from "./../UI";

export const Rating = ({
  rating,
  isEditable = false,
  setRating,
  ...props
}: RatingProps): JSX.Element => {
  const [localRating, setLocalRating] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  const changeDisplay = (index: number) => {
    isEditable && constructRating(index);
  };

  const onChangeRating = (index: number) => {
    isEditable && setRating && setRating(index);
  };

  const handleSpace = (index: number, e: KeyboardEvent<SVGElement>) => {
    if (e.code != "Space") return;
    isEditable && setRating && setRating(index);
  };

  const constructRating = (currentRating: number) => {
    const updatedArray = localRating.map((el: JSX.Element, index: number) => {
      return (
        <span
          className={cn(styles.star, {
            [styles.filled]: index < currentRating,
            [styles.isEditable]: isEditable,
          })}
          onMouseEnter={() => changeDisplay(index + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => isEditable && onChangeRating(index + 1)}
        >
          <Star
            tabIndex={isEditable ? 0 : -1}
            onKeyDown={(e: KeyboardEvent<SVGElement>) =>
              isEditable && handleSpace(index + 1, e)
            }
          />
        </span>
      );
    });
    setLocalRating(updatedArray);
  };

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  return (
    <div {...props}>
      {localRating.map((el, i) => (
        <span key={i}>{el}</span>
      ))}
    </div>
  );
};
