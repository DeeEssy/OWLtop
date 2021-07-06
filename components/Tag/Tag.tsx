import { TagProps } from "./Tag.props";
import styles from "./Tag.module.scss";
import cn from "classnames";

export const Tag = ({
  className,
  children,
  size = "small",
  url,
  color = "ghost",
}: TagProps): JSX.Element => {
  return (
    <div
      className={cn(styles.tag, className, {
        [styles.small]: size == "small",
        [styles.large]: size == "large",
        [styles.ghost]: color == "ghost",
        [styles.red]: color == "red",
        [styles.grey]: color == "grey",
        [styles.green]: color == "green",
        [styles.primary]: color == "primary",
      })}
    >
      {url ? <a href={url}>{children}</a> : <span>{children}</span>}
    </div>
  );
};
