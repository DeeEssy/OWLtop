import PtagProps from "./Ptag.props";

export const Ptag = ({
  children,
  fontSize = 14,
  className,
  padding,
  margin,
}: PtagProps): JSX.Element => {
  const propsStyles = {
    fontSize: `${fontSize}px`,
    margin,
    padding,
  };
  return (
    <p className={className} style={propsStyles}>
      {children}
    </p>
  );
};
