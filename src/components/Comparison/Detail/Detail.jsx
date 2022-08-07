import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { BlueBox, Container, GreenBox, SpecialTitle, Title, YellowBox } from "./style";

const Detail = ({ data,title }) => {
  

  const rows = [data];

  return (
    <Container>
      <Title> {data !== undefined ? `${title}  ${data.name}` : `${title}  Airport`}</Title>
      <TableContainer  className='maintable' component={Paper} >
        <Table
        className='maintable'
          sx={{ minWidth: 650, fontWeight: 600 }}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell size="medium">Airport Name</TableCell>
              <TableCell size="medium" align="center">
                City
              </TableCell>
              <TableCell size="medium" align="center">
                State
              </TableCell>
              <TableCell size="medium" align="center">
                Code
              </TableCell>
              <TableCell size="medium" align="center">
                Icao
              </TableCell>
              <TableCell size="medium" align="center">
                Woeid
              </TableCell>
              <TableCell size="medium" align="center">
                Carriers
              </TableCell>
              <TableCell size="medium" align="center">
                Lattitude
              </TableCell>
              <TableCell size="medium" align="center">
                Longtitude
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.map((row,index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row!==undefined ? row?.name : '...'}
                </TableCell>
                <TableCell size="small" align="center">
                  {row!==undefined ? row?.city : '...'}
                </TableCell>
                <TableCell size="small" align="center">
                  {row!==undefined ? row?.state : '...'}
                </TableCell>
                <TableCell size="small" align="center">
                  <GreenBox>{row!==undefined ? row?.code : '...'}</GreenBox>
                </TableCell>
                <TableCell size="small" align="center">
                  <BlueBox>{row!==undefined ? row?.icao : '...'}</BlueBox>
                </TableCell>
                <TableCell size="small" align="center">
                  <YellowBox>{row!==undefined ? row?.woeid : '...'}</YellowBox>
                </TableCell>
                <TableCell size="small" align="center">
                  {row!==undefined ? row?.carriers : '...'}
                </TableCell>
                <TableCell size="small" align="center">
                  {row!==undefined ? row?.lat : '...'}
                </TableCell>
                <TableCell size="small" align="center">
                  {row!==undefined ? row?.lon : '...'}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <SpecialTitle>
        Details of {data!==undefined ? data?.name : 'Airport'} {data?.tz}
      </SpecialTitle>
    </Container>
  );
};

export default Detail;
