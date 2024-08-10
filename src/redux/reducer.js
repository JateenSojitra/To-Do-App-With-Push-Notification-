import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    formData : {},
    data : []
}

export const fromDataSlice = createSlice({
    name: "formDataSlice",
    initialState,
    reducers : {
        setProps : (state , action)=>{
            state.formData = action.payload 
        },
        setCardData :  (state , action)=>{
            state.data = action.payload
        }
    }
})
export const cardDetailsSlice = createSlice({
    name: "cardDetailsSlice",
    initialState,
    reducers : {
        setProps : (state , action)=>{
            state.formData = action.payload 
        },
        setCardData :  (state , action)=>{
            state.data = action.payload
        }
    } 
})

export const { setProps , setCardData} = fromDataSlice.actions
export const { setPropss , setCardDatas} = cardDetailsSlice.actions
export default fromDataSlice.reducer;