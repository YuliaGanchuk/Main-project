import style from "./pagination.module.scss";
import { Pagination } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";


const theme = createTheme({
  shape: {
    borderRadius: 12,
  },
  typography:{
    fontFamily:'Poppins, Arial',
  },
  palette: {
    primary: {
      main: "rgba(123, 110, 246, 1)",
      darker: "#053e85",
    },
    action: {
      hover: "rgba(123, 110, 246, 1)",
    },
    text: {
      primary: "white",
    },
  },
});

export const PaginationComponent = (props) => {
  const { count, defoultPage, setNumber } = props;
  const setCurrentPage = (event, value) => {
    setNumber(value);
  };
  return (
    <ThemeProvider theme={theme}>
      <Pagination
        count={count}
        page={defoultPage}
        onChange={setCurrentPage}
        size="large"
        className={style.list}
        shape="rounded"
        color="primary"
        hidePrevButton
        hideNextButton
      />
    </ThemeProvider>
  );
};

