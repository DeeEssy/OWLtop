import { ButtonProps } from "./Button.props";
import styles from "./Button.module.scss";
import { Arrow } from "../UI";
import cn from "classnames";

export const Button = ({
  children,
  primary,
  ghost,
  className,
  withArrow,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: primary,
        [styles.ghost]: ghost,
      })}
      {...props}
    >
      {children}
      {withArrow && <Arrow />}
    </button>
  );
};
