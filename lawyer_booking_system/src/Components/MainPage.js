import React from 'react'
import wallpaper from '../../src/assets/images/wallpaper.jpg';
import Button from '@mui/material/Button';
import '../../src/assets/css/custom.css';

export default function MainPage(props) {
  return (
    <div className='maindiv'>
    <img src={wallpaper} width="100%"/>
    <h1> Lawyer Appointment Management System </h1>
    
    <Button variant="contained" className='btn' onClick={()=> props.history.push('/booking')}>Lawyer Booking Panel</Button>
        
    </div>
  )
}
