import React, { FC } from "react";
import { Paper, Card, Button, TextField } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  card: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    padding: 10,
  },
  paper: {
    maxWidth: "300px",
    margin: "0 auto",
    marginTop: "30vh",
  },
  form: {
    marginLeft: 5,
    display: "flex",
    flexDirection: "column",
  },
  buttonWrapper: {
    marginTop: 10,
  },
  button: {
    width: "100%",
  },
  input: {
    marginTop: 5,
  },
});

const Login: FC = () => {
  const [values, setValues] = React.useState({
    email: "",
    password: "",
    showPassword: false,
  });
  const classes = useStyles();

  const history = useHistory();

  const handleChange = (prop: any) => (event: any) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClick = () => {
    history.push("/home");
  };

  return (
    <Paper elevation={7} className={classes.paper}>
      <Card className={classes.card}>
        <form className={classes.form}>
          <TextField
            className={classes.input}
            id="email"
            type="email"
            value={values.email}
            autoFocus={true}
            onChange={handleChange("email")}
            label="Email Address"
            inputProps={{
              form: {
                autocomplete: "off",
              },
            }}
          />
          <TextField
            className={classes.input}
            id="password"
            color="secondary"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            autoComplete="off"
            onChange={handleChange("password")}
            label="Password"
          />
          <div className={classes.buttonWrapper}>
            <Button
              className={classes.button}
              id="submit"
              variant="outlined"
              color="primary"
              style={{ textTransform: "none" }}
              onClick={handleClick}
              size="large"
            >
              Login
            </Button>
          </div>
        </form>
      </Card>
    </Paper>
  );
};

export default Login;
