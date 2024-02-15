"use client";
import { Grid } from "@mui/material";
import React from "react";
import Paper from "@mui/material/Paper";
import styled from "@mui/material/styles/styled";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useState } from "react";
import TextCard from "@/app/(components)/textcard";

function handleFileUpload() {
  console.log("File Uploaded");
  setFile_uploaded(true);
  async function handleFileUpload(event) {
    if (!event.target.files || event.target.files.length === 0) {
      return; // User canceled file selection
    }
    const file = event.target.files[0];
    await fetch("/api/file", {
      method: "POST",
      body: file,
      headers: {
        "Content-Type": file.type,
      },
    });
  }
}

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
  height: "140%",
  "&:hover": {
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  },
}));

export default function Analysis() {
  const [file_uploaded, setFile_uploaded] = useState(false);
  return (
    <div style={{ padding: "10px", paddingTop: "25px" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={7}>
          <TextCard
            header1={"Data Analysis on Tabular Data"}
            text2={
              "This is a platform where you can add your own data of any Tabular Form and then visualize the Data."
            }
          ></TextCard>
        </Grid>
        <Grid item xs={5}>
          <Item>
            <h3>Add Tabular Data</h3>
            <p>
              This is a simple example of a t abular data analysis using Python
              Pandas and MatplotLib.
            </p>
            <div style={{ paddingTop: "60px" }}>
              <input
                type="file"
                id="file"
                accept=".xls, .csv"
                onChange={handleFileUpload}
              />
              <label for="file" class="btn-2-file">
                upload
              </label>
            </div>
            {file_uploaded ? (
              <div>
                <FormControl>
                  <FormLabel id="demo-row-radio-buttons-group-label">
                    Does the data have header row?
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="yes"
                      control={<Radio />}
                      label="yes"
                    />
                    <FormControlLabel
                      value="no"
                      control={<Radio />}
                      label="no"
                    />

                    <FormControlLabel
                      value="disabled"
                      disabled
                      control={<Radio />}
                      label="other"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
            ) : (
              <div></div>
            )}
          </Item>
        </Grid>
      </Grid>
    </div>
  );
}
