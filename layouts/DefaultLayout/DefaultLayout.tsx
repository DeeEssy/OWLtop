import DefaultLayoutProps from "./DefaultLayout.props";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { Sidebar } from "./Sidebar/Sidebar";
import { FunctionComponent } from "react";

const DefaultLayout = ({ children }: DefaultLayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      <div>
        <Sidebar />
        <div>{children}</div>
      </div>
      <Footer />
    </>
  );
};

export const withLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <DefaultLayout>
        <Component {...props} />
      </DefaultLayout>
    );
  };
};
