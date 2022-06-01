const initialState={
    list:[],
    item:[]
};

export const lawyerData=(state=initialState, action={})=>{
    console.log("ppppp",action.payload)
    switch(action.type)
    {
        case 'GET_ALL_LAWYERS':
            return {
                ...state,
                list:[...action.payload]
            }
        case 'GET_LAWYER_HISTORY':
            return {
                ...state,
                item:[...action.payload]
            }
        default:
            return {
                ...state
            }
        
    }
}