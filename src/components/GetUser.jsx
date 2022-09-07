import  React,{useState,useEffect} from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getuser ,deleteuser} from '../server/crud';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
   
},
[`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



export default function GetUser() {

    const [users,setUsers] = useState([])

    useEffect(()=>{
        getuserDetails()
    },[])

    const getuserDetails=async()=>{
      let res =  await getuser()
      setUsers(res.data)
    }

    const deleteUserDetails =async(id)=>{
        await deleteuser(id)
        getuserDetails()
    }

    console.log(users)
  return (
    <TableContainer style={{width:"90%", margin:"auto", marginTop:"50px"}} component={Paper}>
      <Table sx={{ minWidth: 700 }}  aria-label="customized table">
        <TableHead >
          <TableRow >
            <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Phone</StyledTableCell>
            <StyledTableCell align="right">Dob</StyledTableCell>
            <StyledTableCell align="right">Gender</StyledTableCell>
            <StyledTableCell align="right">Edit</StyledTableCell>
            <StyledTableCell align="right">Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell align="right">{row.name}</StyledTableCell>
              <StyledTableCell align="right">{row.email}</StyledTableCell>
              <StyledTableCell align="right">{row.phone}</StyledTableCell>
              <StyledTableCell align="right">{row.dob}</StyledTableCell>
              <StyledTableCell align="right">{row.gender}</StyledTableCell>
              <StyledTableCell align='right' >
                <Link style={{textDecoration:"none"}} to={`/edit/${row.id}`}><Button variant="contained" color="success">Edit</Button></Link>
                </StyledTableCell>
                <StyledTableCell align='right'>
                <Button variant="contained" color="error" onClick={()=>deleteUserDetails(row.id)}>delete</Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

