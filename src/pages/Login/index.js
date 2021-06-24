import React from "react";
import { Paper, TextField, Button } from "@material-ui/core";
import { useHistory } from "react-router";

function Login() {
  const history = useHistory();
  function handleLogin() {
    history.push("/dashboard");
  }
  return (
    <Paper>
      <form>
        <TextField type="text" label="Username" variant="outlined" />
        <TextField type="password" label="Password" variant="outlined" />
        <Button variant="contained" color="primary" onClick={handleLogin}>
          Login
        </Button>
      </form>
    </Paper>
  );
}

export default Login;
