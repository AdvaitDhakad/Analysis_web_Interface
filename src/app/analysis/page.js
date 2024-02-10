"use client";
import { Grid } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import styled from "@mui/material/styles/styled";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const Item = styled(Paper)(({ header1, text1, theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  border: "2px dashed",
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  header1: {
    fontSize: "1.5em",
  },
  text1: {
    fontSize: "1em",
  },
  "&:hover": {
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  },
}));

export default function Analysis() {
  return (
    <div style={{ padding: "10px" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Item>
            <h3>Data Analysis on Tabular Data</h3>
            <p>
              This is a simple example of a tabular data analysis using Python
              Pandas and MatplotLib.
            </p>

            <input type="file" id="file" accept=".xls, .csv" />
            <label for="file" class="btn-2-file">
              upload
            </label>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item header1="Data Analysis on Stock Market Data">
            <h3>Data Analysis on Stock Market Data</h3>
            <p>
              This is a simple example of a stock market data analysis using
              Python Pandas, MatplotLib and Finance Tools.
            </p>
            <input
              style={{
                width: "20rem",
                paddingBottom: "27px",
                padding: "12px 20px",
                margin: "8px 10px",
                display: "inline-block",
                borderRadius: "4px",
                fontSize: "100%",
              }}
              type="text"
              placeholder="Enter the Symbol of Company."
            />
          </Item>
        </Grid>
        /
      </Grid>
    </div>
  );
}
