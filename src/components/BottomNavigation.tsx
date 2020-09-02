import React, { FC } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import LockIcon from "@material-ui/icons/Lock";
import BallotIcon from "@material-ui/icons/Ballot";
import SettingsIcon from "@material-ui/icons/Settings";
import { useHistory } from "react-router-dom";
import { withRouter } from "react-router";

const useStyles = makeStyles({
  root: {
    width: "100%",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    position: "fixed",
    bottom: 0,
    height: "90px",
  },
});

type NavigationProps = {
  history: any;
};

const Navigation: FC<NavigationProps> = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const history = useHistory();

  React.useEffect(() => {
    props.history.location.pathname === "/home" && setValue(1);
  });

  const handleClick = (route: string) => {
    history.push(route);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        label="Logout"
        icon={<LockIcon />}
        onClick={() => handleClick("/")}
      />
      <BottomNavigationAction
        label="Dashboard"
        icon={<BallotIcon />}
        onClick={() => handleClick("/home")}
      />
      <BottomNavigationAction
        label="Setting"
        icon={<SettingsIcon />}
        onClick={() => handleClick("/settings")}
      />
    </BottomNavigation>
  );
};
export default withRouter(Navigation);
