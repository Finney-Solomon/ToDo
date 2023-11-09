import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/actions";
import { useNavigate } from "react-router-dom";

export const TodoHeader = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const user = useSelector((state) => state?.user);
  const userExist = useSelector((state) => state?.userExist);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = [
    {
      type: "User Name",
      value: user.username,
    },
    {
      type: "Name",
      value: user.firstName + " " + user.lastName,
    },
    {
      type: "Phone Number",
      value: user.phoneNumber,
    },
  ];

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    handleCloseUserMenu();
    dispatch(logoutUser(navigate));
  };
  return (
    <>
      <AppBar
        position="static"
        sx={{
          marginBottom: "auto",
          background: "#cfcdcd",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h4"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 5,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "#323131",
                textDecoration: "none",
              }}
            >
              ToDo's
            </Typography>
            <Box sx={{ flexGrow: 0, marginLeft: "auto" }}>
              {!userExist ? (
                <Button onClick={handleLogout} variant="contained">
                  <Typography textAlign="center">Sign In</Typography>
                </Button>
              ) : (
                <>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 1 }}>
                      <Avatar alt="S" src="/static/images/avatar/2.jpg" />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: "45px", width: "350px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    <>
                      {userData.map((userData, index) => (
                        <MenuItem key={index} onClick={handleCloseUserMenu}>
                          <Typography textAlign="center">
                            {userData.type}:{userData.value}
                          </Typography>
                        </MenuItem>
                      ))}
                      <MenuItem onClick={handleLogout}>
                        <Typography textAlign="center">LOGOUT</Typography>
                      </MenuItem>
                    </>
                  </Menu>
                </>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
