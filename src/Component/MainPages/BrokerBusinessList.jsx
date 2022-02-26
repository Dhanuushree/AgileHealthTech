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


function createData(name, LineOfBusiness, Status, CoOrdinator) {
  return { name, LineOfBusiness, Status, CoOrdinator };
}

const rows = [
  createData('Tom', 'CEO', 'Done', 'Ranveer'),
  createData('Steela', 'Sales Manager', 'Pending', 'Deepika'),
  createData('John', 'HR', 'Done', 'Ranveer'),
  createData('Derver', 'Marketing Department', 'Pending', 'Steeve'),
  createData('Elena', 'Finance Head', 'Done', 'Ranveer'),
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
      <Grid item xs={12}>
        <Item> <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Line Of Business</TableCell>
                <TableCell align="right">Status</TableCell>
                <TableCell align="right">Co Ordinator</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.LineOfBusiness}</TableCell>
                  <TableCell align="right">{row.Status}</TableCell>
                  <TableCell align="right">{row.CoOrdinator}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer></Item>
      </Grid>
    </Grid>

  );
}
