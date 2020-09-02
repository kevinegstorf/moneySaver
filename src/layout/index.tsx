import React, { FC } from "react";
import Navigation from "../components/BottomNavigation";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

type LayoutProps = {
  children: React.ReactNode;
};

const useStyles = makeStyles({
  container: {
    marginTop: 40,
  },
});

const Layout: FC = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.container}>
        <>{children}</>
      </Container>
      <Navigation />
    </>
  );
};

export default Layout;
