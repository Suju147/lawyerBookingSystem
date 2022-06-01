import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllLawyers , getLawyerHistory } from '../Redux/Actions/Lawyers'



function LawyerDetails() {
    const dispatch=useDispatch();
    const id=localStorage.getItem('id');
    useEffect(()=>{
       // console.log(localStorage.getItem('id'))
        let payload={
            id:id
        }
        dispatch(getLawyerHistory(payload));
    },[])
    const data=useSelector(state=>
        state.lawyerData.item
    )

    console.log(data);
  return (
    <div className='container'>
   {data ?<> <h1>Lawyer:{data.name}</h1>
        {
            data && data.history.map((itm)=>{
                return <div className='wrapper'>
                    <h1>Client Name :{itm.client}</h1>
                    <span>Date :{itm.date}</span>
                    <span>Case Status:{itm.status}</span>
                </div>
            })
        }</>
        :
        <h1>Loading....</h1>}
    </div>
  )
}

export default LawyerDetails