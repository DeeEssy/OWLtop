import { withLayout } from "layouts/DefaultLayout/DefaultLayout";
import React from "react";
import axios from "axios";
import { MenuItem } from "interfaces/Menu.props";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { TopLevelCategory, TopPageModel } from "interfaces/TopPage.props";
import { ParsedUrlQuery } from "querystring";
import { ProductModel } from "interfaces/Product.props";
import { firstLevelMenu } from "helpers/helpers";

const Course = ({ menu, page, products }: CourseProps): JSX.Element => {
  return <>{products && products.length}</>;
};

export default withLayout(Course);

interface CourseProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: TopLevelCategory;
  page: TopPageModel;
  products: ProductModel[];
}

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: string[] = [];
  for (const item of firstLevelMenu) {
    const { data: menu } = await axios.post<MenuItem[]>(
      `${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`,
      {
        firstCategory: item.id,
      }
    );
    paths = paths.concat(
      menu.flatMap((el) =>
        el.pages.map((page) => `/${item.route}/${page.alias}`)
      )
    );
  }

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<CourseProps> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true,
    };
  }

  const firstCategoryItem = firstLevelMenu.find(
    (el) => el.route === params.type
  );

  if (!firstCategoryItem) {
    return {
      notFound: true,
    };
  }

  try {
    const { data: menu } = await axios.post<MenuItem[]>(
      `${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`,
      {
        firstCategory: firstCategoryItem.id,
      }
    );

    if (!menu.length) {
      return {
        notFound: true,
      };
    }

    const { data: page } = await axios.get<TopPageModel>(
      `${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/byAlias/${params.alias}`
    );
    const { data: products } = await axios.post<ProductModel[]>(
      `${process.env.NEXT_PUBLIC_DOMAIN}/api/product/find`,
      {
        category: page.category,
        limit: 10,
      }
    );
    return {
      props: {
        menu,
        firstCategory: firstCategoryItem.id,
        page,
        products,
      },
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};
