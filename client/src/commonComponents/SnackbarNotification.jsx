import { Alert, Snackbar } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openCloseSnackbarNotification } from "../redux/actions";

export const SnackbarNotification = () => {
  const open = useSelector((state) => state?.snackbar?.open);
  const message = useSelector((state) => state?.snackbar?.message);
  const severity = useSelector((state) => state?.snackbar?.type);
  const dispatch = useDispatch();
  const handleClose = () => {
    const notification = {
      type: "",
      message: "",
      open: false,
    };
    dispatch(openCloseSnackbarNotification(notification));
  };
  return (
    <>
      <Snackbar open={open} autoHideDuration={6000} onClose={() => handleClose()}>
        <Alert
          onClose={() => handleClose()}
          severity={severity}
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </>
  );
};
