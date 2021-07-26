import { AppContext } from "context/app.context";
import React from "react";
import styles from "./Menu.module.scss";
import { Courses, Books, Products, Services } from "@/components/UI";
import { firstLevelMenuItem, PageItem } from "interfaces/Menu.props";
import { TopLevelCategory } from "interfaces/TopPage.props";
import cn from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";

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
  const router = useRouter();

  const openSecondLevel = (secondLevelBlock: string) => {
    setMenu &&
      setMenu(
        menu.map((el) => {
          if (el._id.secondCategory == secondLevelBlock) {
            el.isOpened = !el.isOpened;
          }
          return el;
        })
      );
  };

  const buildFirstLevel = (): JSX.Element => {
    return (
      <>
        {firstLevelMenu &&
          firstLevelMenu.map((el) => (
            <div key={el.route}>
              <Link href={`/${el.route}`}>
                <a>
                  <div
                    className={cn(styles.firstLevel, {
                      [styles.firstLevelActive]: el.id == firstCategory,
                    })}
                  >
                    {el.icon}
                    <span>{el.name}</span>
                  </div>
                </a>
              </Link>
              {el.id == firstCategory && buildSecondLevel(el)}
            </div>
          ))}
      </>
    );
  };
  const buildSecondLevel = (menuItem: firstLevelMenuItem) => {
    return (
      <div className={styles.secondBlock}>
        {menu.map((menu) => {
          if (
            menu.pages.map((p) => p.alias).includes(router.asPath.split("/")[2])
          ) {
            menu.isOpened = true;
          }
          return (
            <div key={menu._id.secondCategory}>
              <div
                className={styles.secondLevel}
                onClick={() => openSecondLevel(menu._id.secondCategory)}
              >
                {menu._id.secondCategory}
              </div>
              <div
                className={cn(styles.secondLevelBlock, {
                  [styles.secondLevelBlockOpened]: menu.isOpened,
                })}
              >
                {buildThirdLevel(menu.pages, menuItem.route)}
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return pages.map((p) => (
      <Link key={p._id} href={`/${route}/${p.alias}`}>
        <a
          className={cn(styles.thirdLevel, {
            [styles.thirdLevelActive]: `/${route}/${p.alias}` == router.asPath,
          })}
        >
          {p.category}
        </a>
      </Link>
    ));
  };

  return <div className={styles.menu}>{buildFirstLevel()}</div>;
};
