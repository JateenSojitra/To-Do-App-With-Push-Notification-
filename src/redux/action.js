const SETFORMDATA = "setFormData"
const GRIDDATA = "setGridList"
const CARDDATA = "setCardData"

export const setProps =(payload)=>{
    return {
        type : SETFORMDATA,
        payload
    }
}
export const setGridList =(payload)=>{
    return {
        type : GRIDDATA,
        payload
    }
}
export const setCardData =(payload)=>{
    return {
        type : CARDDATA,
        payload
    }
}