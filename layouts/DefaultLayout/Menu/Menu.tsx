import { AppContext } from "context/app.context";
import React from "react";
import styles from "./Menu.module.scss";
import { Courses, Books, Products, Services } from "@/components/UI";
import { firstLevelMenuItem, PageItem } from "interfaces/Menu.props";
import { TopLevelCategory } from "interfaces/TopPage.props";
import cn from "classnames";

const firstLevelMenu: firstLevelMenuItem[] = [
  {
    route: "courses",
    name: "Курсы",
    icon: <Courses />,
    id: TopLevelCategory.Courses,
  },
  {
    route: "services",
    name: "Сервисы",
    icon: <Services />,
    id: TopLevelCategory.Services,
  },
  {
    route: "books",
    name: "Книги",
    icon: <Books />,
    id: TopLevelCategory.Books,
  },
  {
    route: "products",
    name: "Товары",
    icon: <Products />,
    id: TopLevelCategory.Products,
  },
];

export const Menu = (): JSX.Element => {
  const { menu, firstCategory, setMenu } = React.useContext(AppContext);

  const buildFirstLevel = (): JSX.Element => {
    return (
      <>
        {firstLevelMenu &&
          firstLevelMenu.map((el) => (
            <div key={el.route}>
              <a href={`/${el.route}`}>
                <div
                  className={cn(styles.firstLevel, {
                    [styles.firstLevelActive]: el.id == firstCategory,
                  })}
                >
                  {el.icon}
                  <span>{el.name}</span>
                </div>
              </a>
              {el.id == firstCategory && buildSecondLevel(el)}
            </div>
          ))}
      </>
    );
  };
  const buildSecondLevel = (menuItem: firstLevelMenuItem) => {
    return (
      <div>
        {menu.map((menu) => (
          <div key={menu._id.secondCategory}>
            <div className={styles.secondLevel}>{menu._id.secondCategory}</div>
            <div
              className={cn(styles.secondLevelBlock, {
                [styles.secondLevelBlockOpened]: menu.isOpened,
              })}
            >
              {buildThirdLevel(menu.pages, menuItem.route)}
            </div>
          </div>
        ))}
      </div>
    );
  };
  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return (

    )
  };

  return <div className={styles.menu}>{buildFirstLevel()}</div>;
};
