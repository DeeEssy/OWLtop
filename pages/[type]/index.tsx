import { withLayout } from "layouts/DefaultLayout/DefaultLayout";
import React from "react";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import axios from "axios";
import { MenuItem } from "interfaces/Menu.props";
import { firstLevelMenu } from "helpers/helpers";
import { ParsedUrlQuery } from "querystring";
import { TypeProps } from "interfaces/TypeProps";

const Type = ({ firstCategory }: TypeProps): JSX.Element => {
  return <>Type{firstCategory}</>;
};

export default withLayout(Type);

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: firstLevelMenu.map((m) => `/${m.route}`),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<HomeProps> = async ({
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
  const { data: menu } = await axios.post<MenuItem[]>(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`,
    {
      firstCategory: firstCategoryItem.id,
    }
  );

  return {
    props: {
      menu,
      firstCategory: firstCategoryItem.id,
    },
  };
};
