import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import CsvReader from "react-csv-reader";
import axios from "axios";

export default function UploadTabular() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const [rows, setRows] = useState([]);
  const [header_row, setHeader_row] = useState([]);

  const handleForce = (data, fileInfo) => {
    setRows(data);
    const headers = data[0];
    const rows = data.slice(1).map((row, index) => {
      let obj = {};
      row.forEach((item, i) => {
        obj[headers[i]] = item;
      });
      return { id: index, ...obj };
    });
    setData(rows);
    setHeader_row(headers);
  };

  const handleSubmit = () => {
    axios
      .post("/api/upload/", { data: rows, headers: header_row })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open CSV Reader
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Upload CSV File</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please upload your CSV file here.
          </DialogContentText>
          <Button variant="outlined">
            <CsvReader
              cssClass="csv-reader-input"
              label="Select CSV"
              onFileLoaded={handleForce}
              inputId="ObiWan"
              inputStyle={{ color: "red" }}
            />
          </Button>
          <DataGrid
            rows={data}
            columns={Object.keys(data[0] || {})
              .filter((key) => key !== "id")
              .map((key) => ({
                field: key,
                headerName: key,
              }))}
            pageSize={5}
          />
        </DialogContent>
        <div
          style={{
            display: "flex",
            alignContent: "flex-between",
            width: "100%",
          }}
        >
          <DialogActions>
            <Button variant="outlined" onClick={handleSubmit} color="primary">
              Submit
            </Button>
          </DialogActions>
          <DialogActions>
            <Button variant="contained" onClick={handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </div>
      </Dialog>
    </div>
  );
}
