import { createTheme } from "@mui/material/styles";
const theme = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#1A2027",
          border: "2px dashed black",
        },
      },
    },
  },
  palette: {
    mode: "dark",
  },
});
