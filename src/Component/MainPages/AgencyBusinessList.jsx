import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';


function createData(companyName, lineOfBusiness, status, coOrdinator) {
  return { companyName, lineOfBusiness, status, coOrdinator };
}

const rows = [
  createData('IBM', 'CEO', 'Done', 'Ranveer'),
  createData('Google', 'Sales Manager', 'Pending', 'Deepika'),
  createData('Dell', 'Marketing Department', 'Pending', 'Steeve'),
  createData('Microsoft', 'HR', 'Done', 'Ranveer'),
  createData('Lenovo', 'Finance Head', 'Done', 'Ranveer'),
];
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
export default function customerlist() {
  return (
    <Grid container spacing={2}>
      <Grid item sm={12} md={12} xs={12} >
        <Item> <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell  align="center">Company Name</TableCell>
                <TableCell align="center">Line Of Business </TableCell>
                <TableCell align="center">Status</TableCell>
                <TableCell align="center">Co Ordinator</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th"  align="center" scope="row">{row.companyName}</TableCell>
                  <TableCell align="center">{row.lineOfBusiness}</TableCell>
                  <TableCell align="center">{row.status}</TableCell>
                  <TableCell align="center">{row.coOrdinator}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer></Item>
      </Grid>
    </Grid>

  );
}
