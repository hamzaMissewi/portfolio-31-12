import React from "react";
import { Pagination, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { blueGrey, lightGreen } from "@mui/material/colors";

const darkTheme = createTheme({
  palette: {
    primary: { main: blueGrey[700] },
    success: { main: lightGreen[700] },
  },
});

interface CustomPaginationProps {
  setPage: (page: number) => void;
  numOfPages?: number;
}

export default function CustomPagination({
  setPage,
  numOfPages = 10,
}: CustomPaginationProps) {
  // Scroll to top when page changes
  const handlePageChange = (page: number) => {
    setPage(page);
    window.scroll(0, 0);
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
      }}
    >
      <ThemeProvider theme={darkTheme}>
        <Pagination
          // onChange={(e) => handlePageChange(e.target.textContent)}
          // onChange={(e: React.ChangeEvent<string>, value) => handlePageChange(e.target.textContent)}
          onChange={(e: React.ChangeEvent<unknown>, value) =>
            handlePageChange(value)
          }
          count={numOfPages}
          color="primary"
          hideNextButton
          hidePrevButton
        />
      </ThemeProvider>
    </div>
  );
}
