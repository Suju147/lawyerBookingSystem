import React from 'react';
import { useEffect } from 'react';
import { getAllLawyers, getLawyerHistory, getYourBooking } from '../Redux/Actions/Lawyers';
import { useDispatch, useSelector } from 'react-redux';
import ReactTable from 'react-table'
import { Button } from '@mui/material';
//import VisibilityIcon from '@material-ui/icons/Visibility'
import '../assets/css/custom.css'
//import 'react-table/react-table.css'




export default function Booking(props) {
  const dispatch=useDispatch();
    useEffect(()=>{
      getAllLawyers({});

    },[])
    const data=useSelector((state)=>state.lawyerData.list);

    const checkHistory=(id)=>{
      let payload={
        id:id
      }
        localStorage.setItem("id",id);
        props.history.push('/history');
          
    }

    const bookingFun=(id)=>
    {
      let payload={
        id:id
      }
        window.confirm('Do you want to book this Appointment?')
        dispatch(getYourBooking(payload))
    }
    
  return (
  <div className='container'> 
  <h1> Welcome To Lawyer Appointment panel!</h1> 
  <div className='booking'>
    {
      data?
      <table>
        <tr>
          <th>Lawyer Id</th>
          <th>Name</th>
          <th>Specialization</th>
          <th>Booking/day</th>
          <th>Booked</th>
          <th>Fees/Appointment</th>
          <th>History</th>
          <th>Action</th>
          
          
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.id}</td>
              <td>{val.name}</td>
              <td>{val.speciality}</td>
              <td>{val.availability}</td>
              <td>{val.booked}</td>
              <td>{val.cost}</td>
              <td><span style={{
                fontSize:"Bold",
                color:"blue",
                cursor:"pointer"
              }} onClick={()=>checkHistory(val.id)}>Check</span></td>
              <td>{val.availability==val.booked ? <h3>Appointments are not Available!</h3>:<Button variant="contained" onClick={()=> bookingFun(val.id)}>Book</Button>}</td>
            </tr>
          )
        })}
      </table>
      :
      <h1>Loading...</h1>
    }
  </div>
  </div>


  );
}
