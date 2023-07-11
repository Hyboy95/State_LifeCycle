import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

export default function BasicTable({rows, deleteClick, editClick}) {
  return (
    <TableContainer component={Paper} style={{marginBottom:20, maxWidth: 600, textAlign: "center", margin: "auto"}}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{textAlign:'center'}} align="right">Tên</TableCell>
            <TableCell style={{textAlign:'center'}} align="right">SĐT</TableCell>
            <TableCell style={{textAlign:'center'}} align="right">Email</TableCell>
            <TableCell style={{textAlign:'center'}} align="right">Lựa Chọn</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={row.phone}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell style={{textAlign:'center'}} component="th" scope="row">
                {row.name}
              </TableCell>  
              <TableCell style={{textAlign:'center'}} component="th" scope="row">{row.phone}</TableCell>
              <TableCell style={{textAlign:'center'}} component="th" scope="row">{row.email}</TableCell>
              <TableCell style={{textAlign:'center'}} component="th" scope="row">
              <Button variant='contained'onClick={() => editClick(index)}>Sửa</Button>
              <Button style={{ backgroundColor:'red'}} variant='contained' onClick={() => deleteClick(index)}>Xóa</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}