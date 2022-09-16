import { createAsyncThunk, createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import {  CovidDataInterface, fetchByCountry, fetchWorldWIP } from './apiManager';


export interface DataStateInterface {
    value: CovidDataInterface[] | [],
    status: 'idle' | 'loading' | 'failed' | 'succeeded',
    region:'WorldWide' | 'byCountry'
}

const initialState: DataStateInterface = {
    value: [],
    status:'idle',
    region:'WorldWide'
};

export const fetchDataWIPAsync = createAsyncThunk(
    'data/fetchWorldData',
   async () => {
    const response = await fetchWorldWIP()
    console.log(response.data)
    return response.data;
   }
);

export const fetchDataCountryAsync = createAsyncThunk(
    'data/CountryData',
   async () => {
    const response = await fetchByCountry()
    console.log(response.data)
    return response.data;
   }
);

const covidSlice = createSlice({
    name:'covid',
    initialState,
    reducers:{
        setRegionValue: (state,action:PayloadAction<CovidDataInterface[]>) => {
            state.value = action.payload
            console.log(action.payload)
            if(Object.hasOwn(action.payload[0],'Country')){
                console.log('bycountry')
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(
                isAnyOf(fetchDataWIPAsync.pending,fetchDataCountryAsync.pending),
                (state,action)=>{
                    state.status = 'loading';
                }
            )
            .addMatcher(
                isAnyOf(fetchDataWIPAsync.fulfilled,fetchDataCountryAsync.fulfilled),
                (state,action)=>{
                    state.value = action.payload;
                    state.status = 'succeeded';
                    if(action.type.includes('CountryData')){
                        state.region = 'byCountry'
                    }else{
                        state.region = 'WorldWide'
                    }
                }
            )
            .addMatcher(
                isAnyOf(fetchDataWIPAsync.rejected,fetchDataCountryAsync.rejected),
                (state,action)=>{
                    state.status = 'failed';
                }
            )
      },
})

export const { setRegionValue } = covidSlice.actions;

export const selectCovidData = (state: RootState) => state.covid;

export default covidSlice.reducer;