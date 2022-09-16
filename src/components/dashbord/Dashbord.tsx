import React, { useEffect } from 'react'
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {  fetchDataWIPAsync, selectCovidData } from '../../features/covidData/covidDataSlice';
import DashbordHeader from './components/DashbordHeader';
import Graph from './components/Graph';
import Information from './components/information/Information';
import RenderByStatus from './components/RenderByStatus';

const Dashbord = () => {
  const dispatch = useAppDispatch()

 
  useEffect(() =>{
    dispatch(fetchDataWIPAsync())
  },[dispatch])
  
  const covidData = useAppSelector(selectCovidData)
  const latestData = covidData.value[covidData.value.length-1]

  return (
    <DashBordWrapper className='container'>
        <DashbordHeader/>
        <div className="row">
            <div className="col-12 col-l-8">
                <RenderByStatus
                  //  element={<Graph covidData={covidData.value}/>}
                   element={<Graph/>}
                   status={covidData.status}
                />
            </div>
            <div className="col-12 col-l-4">
                <RenderByStatus
                   element={<Information data={latestData}/>}
                   status={covidData.status}
                />
            </div>
        </div>
    </DashBordWrapper>
  )
}

export default Dashbord;


const DashBordWrapper = styled.div`

    
`