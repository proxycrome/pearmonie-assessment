import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Searchbar from "../searchbar";
import TableFooter from "@mui/material/TableFooter";
import Pagination from "@mui/material/Pagination";
import { PaginationItem } from "@mui/material";
import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "./table.module.css";

const theme = createTheme({
  components: {
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            backgroundColor: "#5932EA",
            color: "#fff",
          },
        },
      },
    },
  },
});

const ITEMS_PER_PAGE = 8;

const TableComponent = ({ users, loading }) => {
  const formatUsers = users?.map((item) => {
    const num = Math.round(Math.random());
    return {
      id: item.id,
      username: item.username,
      company: item.company.name,
      phone: item.phone,
      email: item.email,
      country: item.address.country,
      status: num ? "active" : "inactive",
    };
  });

  const [page, setPage] = React.useState(1);

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const paginatedData = formatUsers.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.tableName}>
          <h4>All Users</h4>
          <span>Active Members</span>
        </div>
        <div className={styles.filter}>
          <Searchbar background="#F9FBFF" />
          <select defaultValue="">
            <option disabled value="">
              Sort by: Newest
            </option>
          </select>
        </div>
      </header>
      <div className={styles.tableWrapper}>
        {loading ? (
          <Skeleton count={8} />
        ) : (
          <ThemeProvider theme={theme}>
            <TableContainer>
              <Table sx={{ minWidth: 650 }}>
                <TableHead>
                  <TableRow>
                    <TableCell className={styles.headerCell}>
                      Users Name
                    </TableCell>
                    <TableCell className={styles.headerCell}>Company</TableCell>
                    <TableCell className={styles.headerCell}>
                      Phone Number
                    </TableCell>
                    <TableCell className={styles.headerCell}>Email</TableCell>
                    <TableCell className={styles.headerCell}>Country</TableCell>
                    <TableCell className={styles.headerCell}>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {paginatedData.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell
                        className={[styles.bodyCell, styles.capitalize].join(
                          " "
                        )}
                      >
                        {row.username}
                      </TableCell>
                      <TableCell className={styles.bodyCell}>
                        {row.company}
                      </TableCell>
                      <TableCell className={styles.bodyCell}>
                        {row.phone}
                      </TableCell>
                      <TableCell className={styles.bodyCell}>
                        {row.email}
                      </TableCell>
                      <TableCell className={styles.bodyCell}>
                        {row.country}
                      </TableCell>
                      <TableCell>
                        <span
                          className={
                            row.status === "active"
                              ? styles.activeBtn
                              : styles.inactiveBtn
                          }
                        >
                          {row.status}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TableCell colSpan={6} sx={{ border: "none" }}>
                      <div className={styles.paginationWrapper}>
                        <span className={styles.paginationInfo}>
                          Showing data {paginatedData[0]?.id ?? 0} to{" "}
                          {paginatedData[paginatedData?.length - 1]?.id ?? 0} of {formatUsers.length}{" "}
                          entries
                        </span>
                        <Pagination
                          count={Math.ceil(formatUsers.length / ITEMS_PER_PAGE)}
                          page={page}
                          onChange={handlePageChange}
                          shape="rounded"
                          variant="outlined"
                          renderItem={(item) => <PaginationItem {...item} />}
                        />
                      </div>
                    </TableCell>
                  </TableRow>
                </TableFooter>
              </Table>
            </TableContainer>
          </ThemeProvider>
        )}
      </div>
    </div>
  );
};

TableComponent.propTypes = {
  users: PropTypes.array,
  loading: PropTypes.bool,
};

export default TableComponent;
