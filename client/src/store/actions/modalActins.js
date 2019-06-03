export const openModal=(data)=>{  
    return{
        type:"MODAL_OPEN",
        payload:data
    }
}

export const closeModal=()=>{
    return{
        type:"MODAL_CLOSE",
    }
}