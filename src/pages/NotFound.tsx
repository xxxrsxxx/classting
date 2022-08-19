import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Typography } from "@mui/material";
import styled from "styled-components";
import { fontColor } from "../constants";

export const role = {
  redirectAction: "redirect-action",
};

const NotFound = () => {
  return (
    <div>
      <Typography
        variant={"h4"}
        sx={{
          color: "#fff",
          marginBottom: "20px",
        }}
      >
        NotFound
      </Typography>
      <Link role={role.redirectAction} to="/">
        Go Home
      </Link>
    </div>
  );
};

const Link = styled(RouterLink)`
  color: ${fontColor.basic};
  display: block;
  padding: 14px;
  margin-bottom: 20px;
  border: 1px solid #fff;
`;
export default NotFound;
