const initialState={
    list:[],
    item:undefined
};

export const lawyerData=(state=initialState, action={})=>{
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
                item:action.payload
            }
        default:
            return {
                ...state
            }
        
    }
}