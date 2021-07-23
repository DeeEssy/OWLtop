import DefaultLayoutProps from "./DefaultLayout.props";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { Sidebar } from "./Sidebar/Sidebar";
import { FunctionComponent } from "react";
import styles from "./DefaultLayout.module.scss";
import { AppContextProvider, IAppContext } from "context/app.context";

const DefaultLayout = ({ children }: DefaultLayoutProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <main className={styles.body}>{children}</main>
      <Footer className={styles.footer} />
    </div>
  );
};

export const withLayout = <T extends Record<string, unknown> & IAppContext>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
        <DefaultLayout>
          <Component {...props} />
        </DefaultLayout>
      </AppContextProvider>
    );
  };
};
