import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions";
import {
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";


export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useNavigate();

  const handleLogin = () => {
    dispatch(login(username, password));
  };

  const handleClick = () => {
    history.push("/register");
  };
  return (
    <Box className="sign-in-box-container">
      <Card>
        <CardContent>
          <toolbar>
            <Typography component="h1" variant="h4">
              Sign in
            </Typography>
          </toolbar>
          <br />
          <FormControl>
            <Grid container square spacing={2}>
              <Grid item xs="12">
                <TextField
                  label="User Name"
                  variant="outlined"
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Grid>
              <br />
              <Grid item xs="12">
                <TextField
                  label="Password"
                  variant="outlined"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <br />
              <Grid item xs="12">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleLogin()}
                >
                  Login
                </Button>
              </Grid>
            </Grid>
            <br />
            <Grid>
              <Grid item>
                <Link path="/register" onClick={() => handleClick}>
                  <Typography>Don't have an account? Sign Up</Typography>
                </Link>
              </Grid>
            </Grid>
          </FormControl>
        </CardContent>
      </Card>
    </Box>
  );
};
