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


function createData(entityType,name, lineOfBusiness, status, bussinessOwner) {
  return {entityType, name, lineOfBusiness, status, bussinessOwner };
}

const rows = [
  createData(1, 'Tom', 'CEO', 'Done', 'Ranveer'),
  createData(2, 'Steela', 'Sales Manager', 'Pending', 'Deepika'),
  createData(3, 'John', 'HR', 'Done', 'Ranveer'),
  createData(4, 'Elena', 'Finance Head', 'Done', 'Ranveer'),
  createData(5, 'Derver', 'Marketing Department', 'Pending', 'Steeve'),
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
                <TableCell  align="center">Entity Type</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Line Of Bussiness</TableCell>
                <TableCell align="center">Status</TableCell>
                <TableCell align="center">Bussiness Owner</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th"  align="center" scope="row">{row.entityType}</TableCell>
                  <TableCell component="th"align="center" scope="row">{row.name}</TableCell>
                  <TableCell align="center">{row.lineOfBusiness}</TableCell>
                  <TableCell align="center">{row.status}</TableCell>
                  <TableCell align="center">{row.bussinessOwner}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer></Item>
      </Grid>
    </Grid>

  );
}
