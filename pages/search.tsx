import { withLayout } from "../layouts/DefaultLayout/DefaultLayout";
import React from "react";
import { GetStaticProps } from "next";
import axios from "axios";
import { MenuItem } from "interfaces/Menu.props";

const Search = (): JSX.Element => {
  return <>Search</>;
};

export default withLayout(Search);

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;

  const { data: menu } = await axios.post<MenuItem[]>(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`,
    {
      firstCategory,
    }
  );

  return {
    props: {
      menu,
      firstCategory,
    },
  };
};
