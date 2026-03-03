import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

export default function Logout() {
  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  async function handleLogout() {
    try {
      const { data } = await axios.post(
        "http://localhost:3002/logout",
        {},
        { withCredentials: true }
      );

      const { success, message } = data;

      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          window.location.href = `http://localhost:5173`;
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Stack
      direction="row"
      style={{ position: "absolute", right: "10px", top: "70px" }}>
      <Button variant="outlined" color="error" onClick={handleLogout}>
        Logout
      </Button>
      <ToastContainer />
    </Stack>
  );
}
