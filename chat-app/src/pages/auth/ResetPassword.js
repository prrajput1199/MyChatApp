import { Link, Stack, Typography } from "@mui/material";
import { CaretLeft } from "phosphor-react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import ResetPasswordForm from "../../settings/Auth/ResetPasswordForm";

const ResetPassword = () => {
  return (
    <>
      <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
        <Typography variant="h3" paragraph>Forget your password?</Typography>
        <Typography color={"text.secondary"} mb={5}>
          Please enter the email address and We will email you a link to reset
          your password
        </Typography>
      </Stack>

      {/* Resetpasswordform */}
      <ResetPasswordForm/>

      <Link color={"inherit"} variant="subtitle2" sx={{
        mt:5,
        mx:"auto",
        alignItems:"center",
        display:"inline"
      }} to={"/auth/login"} component={RouterLink}>
        <CaretLeft/>Return to sign in
      </Link>
    </>
  );
};

export default ResetPassword;
