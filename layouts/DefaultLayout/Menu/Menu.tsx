import { AppContext } from "context/app.context";
import React from "react";
import styles from "./Menu.module.scss";

export const Menu = (): JSX.Element => {
  const { menu, firstCategory, setMenu } = React.useContext(AppContext);
  return (
    <div>
      <ul>
        {menu &&
          menu.map((el) => (
            <li key={el._id.secondCategory}>{el._id.secondCategory}</li>
          ))}
      </ul>
    </div>
  );
};
