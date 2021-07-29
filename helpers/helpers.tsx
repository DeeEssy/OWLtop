import { firstLevelMenuItem } from "interfaces/Menu.props";
import { TopLevelCategory } from "interfaces/TopPage.props";
import { Courses, Books, Products, Services } from "@/components/UI";

export const firstLevelMenu: firstLevelMenuItem[] = [
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
