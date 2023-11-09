import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/actions";
import {
  Button,
  FormControl,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

export const Register = () => {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleRegister = () => {
    const payload = {
      username: username,
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      password: password,
      confirmPassword: confirmPassword,
    };
    dispatch(register(payload, navigate));
  };
  return (
    <>
      <FormControl>
        <Grid container square spacing={2}>
          <Grid item xs="12">
            <Typography component="h1" variant="h4">
              Register
            </Typography>
          </Grid>
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
              label="First Name"
              variant="outlined"
              type="text"
              placeholder="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Grid>
          <br />
          <Grid item xs="12">
            <TextField
              label="Last Name"
              variant="outlined"
              type="text"
              placeholder="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Grid>
          <br />
          <Grid item xs="12">
            <TextField
              label="Phone Number"
              variant="outlined"
              type="text"
              placeholder="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
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
            <TextField
              label="Confirm Password"
              variant="outlined"
              type="password"
              placeholder="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Grid>
          <br />
          <Grid item xs="12">
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleRegister()}
            >
              Register
            </Button>
          </Grid>
        </Grid>
        <br />
        <Grid>
          <Grid item>
            <Link to="/">Have an account? Login</Link>
          </Grid>
        </Grid>
      </FormControl>
    </>
  );
};
