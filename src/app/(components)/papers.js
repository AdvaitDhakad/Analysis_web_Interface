import { Paper } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { useThemeProps } from "@mui/system";
import { useThemeVariants } from "@mui/system";

export default function Papers() {
  return (
    <div>
      <Paper>
        <h1>Papers</h1>
      </Paper>
    </div>
  );
}
