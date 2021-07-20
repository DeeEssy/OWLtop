import { MenuItem } from "interfaces/Menu.props";
import { TopLevelCategory } from "interfaces/TopPage.props";
import { createContext, ReactNode, useState } from "react";

export interface IAppContext {
  menu: MenuItem[];
  firstCategory: TopLevelCategory;
  setMenu?: (newMenu: MenuItem[]) => void;
}

export const AppContext = createContext<IAppContext>({
  menu: [],
  firstCategory: TopLevelCategory.Courses,
});

export const AppContextProvider = ({
  menu,
  firstCategory,
  children,
}: IAppContext & { children: ReactNode }): JSX.Element => {
  // or u can use :PropsWithChildren<IAppContext> // it's the same
  const [menuState, setMenuState] = useState<MenuItem[]>(menu);
  const setMenu = (newMenu: MenuItem[]) => {
    setMenuState(newMenu);
  };
  return (
    <AppContext.Provider value={{ menu: menuState, firstCategory, setMenu }}>
      {children}
    </AppContext.Provider>
  );
};
