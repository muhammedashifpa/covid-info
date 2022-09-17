import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import {   CovidDataInterface, fetchWorldWIP } from './apiManager';


export interface DataStateInterface {
    value: CovidDataInterface[] | [],
    status: 'idle' | 'loading' | 'failed' | 'succeeded',
}

const initialState: DataStateInterface = {
    value: [],
    status:'idle',
};

export const fetchDataWIPAsync = createAsyncThunk(
    'data/fetchWorldData',
   async () => {
    const response = await fetchWorldWIP()
    return response.data;
   }
);



const covidSlice = createSlice({
    name:'covid',
    initialState,
    reducers:{
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(
                isAnyOf(fetchDataWIPAsync.pending),
                (state,action)=>{
                    state.status = 'loading';
                }
            )
            .addMatcher(
                isAnyOf(fetchDataWIPAsync.fulfilled),
                (state,action)=>{
                    state.value = action.payload.sort(function(a,b){
                            return new Date(a.Date).valueOf() - new Date(b.Date).valueOf();
                        })
                    state.status = 'succeeded';
                }
            )
            .addMatcher(
                isAnyOf(fetchDataWIPAsync.rejected),
                (state,action)=>{
                    state.status = 'failed';
                }
            )
      },
})


export const selectCovidData = (state: RootState) => state.covid;

export default covidSlice.reducer;