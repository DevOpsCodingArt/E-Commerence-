import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import { useState } from "react";
import { MdClose, MdEmail, MdArrowBack } from "react-icons/md";
import { Slide, toast, ToastContainer } from "react-toastify";

export default function ForgotEmailDialog({ open, setOpen }) {
  const [loading, setLoading] = useState(false);
  const otp = () => {
    toast.success(
      "📩 OTP sent successfully! Please check your inbox or spam folder.",
      {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Slide,
      },
    );
  };
  const handleClose = () => {
    setOpen(false);
    setLoading(false);
    otp();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const email = event.target.email?.value;
    console.log(email);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      handleClose();
    }, 2000);
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 3,
            padding: 2,
            maxWidth: 400,
            margin: 2,
          },
        }}
      >
        {/* Close Button */}
        <IconButton
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 16,
            top: 16,
            color: "grey.500",
            "&:hover": {
              backgroundColor: "grey.100",
            },
          }}
        >
          <MdClose />
        </IconButton>

        {/* Icon and Title */}
        <Box sx={{ textAlign: "center", pt: 2, pb: 1 }}>
          <Box
            sx={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              backgroundColor: "#ef4444",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 16px",
              mb: 2,
            }}
          >
            <MdEmail style={{ fontSize: 32, color: "white" }} />
          </Box>

          <Box sx={{ p: 0, mb: 1 }}>
            <Typography
              variant="h5"
              component="div"
              fontWeight="bold"
              color="text.primary"
            >
              Forgot Password?
            </Typography>
          </Box>

          <DialogContentText sx={{ color: "text.secondary", fontSize: "1rem" }}>
            Don't worry, we'll send you reset instructions.
          </DialogContentText>
        </Box>

        <form onSubmit={handleSubmit}>
          <DialogContent sx={{ px: 3, py: 2 }}>
            <Box sx={{ mb: 3 }}>
              <Typography
                variant="body2"
                component="label"
                htmlFor="email"
                sx={{
                  display: "block",
                  mb: 1,
                  fontWeight: 500,
                  color: "text.primary",
                }}
              >
                Email Address
              </Typography>
              <TextField
                autoFocus
                required
                id="email"
                name="email"
                type="email"
                fullWidth
                placeholder="Enter your email address"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MdEmail style={{ color: "#9ca3af" }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                    height: 56,
                    "&:hover fieldset": {
                      borderColor: "#ef4444",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#ef4444",
                    },
                  },
                }}
              />
            </Box>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={loading}
              sx={{
                height: 56,
                borderRadius: 2,
                backgroundColor: "#ef4444",
                fontSize: "1rem",
                fontWeight: 600,
                textTransform: "none",
                mb: 2,
                "&:hover": {
                  backgroundColor: "#dc2626",
                },
                "&.Mui-disabled": {
                  backgroundColor: "#fca5a5",
                  color: "white",
                },
              }}
            >
              {loading ? (
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Box
                    sx={{
                      width: 20,
                      height: 20,
                      border: "2px solid transparent",
                      borderTop: "2px solid white",
                      borderRadius: "50%",
                      animation: "spin 1s linear infinite",
                      "@keyframes spin": {
                        "0%": { transform: "rotate(0deg)" },
                        "100%": { transform: "rotate(360deg)" },
                      },
                    }}
                  />
                  Sending...
                </Box>
              ) : (
                "Reset Password"
              )}
            </Button>
          </DialogContent>

          <DialogActions sx={{ justifyContent: "center", pb: 2 }}>
            <Button
              onClick={handleClose}
              startIcon={<MdArrowBack />}
              sx={{
                color: "text.secondary",
                textTransform: "none",
                fontSize: "0.875rem",
                "&:hover": {
                  backgroundColor: "transparent",
                  color: "text.primary",
                },
              }}
            >
              Back to Login
            </Button>
          </DialogActions>
        </form>
      </Dialog>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Slide}
      />
    </>
  );
}
