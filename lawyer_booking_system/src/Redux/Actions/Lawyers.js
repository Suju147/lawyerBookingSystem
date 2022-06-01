import { store } from "../store";
import data from "../../Data";
const {dispatch}=store;



export function getAllLawyers(payload)
{
   

    return new Promise((res,rej)=>{
        if(data)
        {
             dispatch({
                payload:data,
                type:'GET_ALL_LAWYERS'
            })

            return res(data);
        }
        else
        {
            dispatch({
                type:'ERROR'
            })
        }
    })
}

export function getYourBooking(payload, cb)
{

    return new Promise((res,rej)=>{
        if(data)
        {
            data.forEach((itm)=>{
               
                if(itm.id==payload.id)
                {
                   
                    itm.booked++;
                }
                
            })
            
             dispatch({
                payload:data,
                type:'GET_ALL_LAWYERS'
            })

            return res(data);
        }
        else
        {
            dispatch({
                type:'ERROR'
            })
        }
    })
}

export function getLawyerHistory(payload)
{
  
    return new Promise((res,rej)=>{
        if(data)
        {
            let item=data.filter((itm)=>{
               
                if(itm.id==payload.id)
                {
                   
                   return itm
                }
                
            })
             dispatch({
                payload:item,
                type:'GET_LAWYER_HISTORY'
            })
           
           
            return res(data);
        }
        else
        {
            dispatch({
                type:'ERROR'
            })
        }
    })
}