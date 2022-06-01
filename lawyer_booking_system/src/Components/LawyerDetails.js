import { Button } from '@mui/material';
import { positions } from '@mui/system';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import finalPropsSelectorFactory from 'react-redux/es/connect/selectorFactory';
import { getAllLawyers , getLawyerHistory } from '../Redux/Actions/Lawyers'



function LawyerDetails(props) {
    const dispatch=useDispatch();
    const id=localStorage.getItem('id');
    useEffect(()=>{
        console.log(localStorage.getItem('id'),'jhuiuhf')
        let payload={
            id:id
        }
        getLawyerHistory(payload);
    },[])
    const data=useSelector(state=>
        state.lawyerData.item
    )
    
    
    console.log(data,"undefinhgff");
  return (
    <div className='container'>
    <h1> History of the Clients</h1>
    
   {data[0] ?<> <h3>Lawyer: {data[0].name}</h3>
        {
            data && data[0].history.map((itm)=>{
                return <div className='wrapper'>
                    <h3>Client Name :{itm.client}</h3>
                    <span>Date :{itm.date}</span>
                    <br/>
                    <span>Case Status:{itm.status}</span>
                    <div>---------</div>
                </div>
            })
        }
        <Button variant="contained" style={{
        width:'150px',
        left:"45%",
       

    }}
    
    onClick={()=>{
       props.history.goBack();
    }}>Back</Button>
        </>
        :
        <h1>Loading....</h1>}
    </div>
  )
}

export default LawyerDetails