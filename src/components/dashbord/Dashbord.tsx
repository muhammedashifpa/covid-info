import React, { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {  fetchDataWIPAsync, selectCovidData } from '../../features/covidData/covidDataSlice';
import DashbordHeader from './components/DashbordHeader';
import Graph from './components/graph/Graph';
import Information from './components/information/Information';
import RenderByStatus from './components/renderByStatus/RenderByStatus';

export interface graphDataInterface{
  date:string[],
  data:number[],
  lable:string,
  color:{
    color1:string,
    color2:string
  }
}

export interface graphNameInterface {
  graphName: 'death' | 'cases' | 'recovered' | string
}

const Dashbord = () => {
  const dispatch = useAppDispatch()
  //start fetching data after component mount
  useEffect(() =>{
    dispatch(fetchDataWIPAsync())
  },[dispatch])
  
  const covidData = useAppSelector(selectCovidData);


  const [graphName, setGraphName] = useState<graphNameInterface>({graphName: 'cases'});

  const graphChangeHandler = (value:graphNameInterface['graphName']) => {
    setGraphName({graphName:value})
  }

  //storing graph data and avoid unwanted storing
  const graphData = useMemo(()=>{
    var result:graphDataInterface = {
      date:[],
      data:[],
      lable:'',
      color: {
        color1:'',
        color2:'',
      }
    }
    
    if(covidData.status === 'succeeded'){
      switch(graphName.graphName){
        case 'cases':
          result = {
            date: covidData.value.map(item=>item.Date.split("T")[0]),
            data: covidData.value.map(item=>item.NewConfirmed),
            lable:'New Cases',
            color: {
              color1:'#ffb300',
              color2:'#ffcc5680'
            }
          }
          break;
        case 'death':
          result = {
            date: covidData.value.map(item=>item.Date.split("T")[0]),
            data: covidData.value.map(item=>item.NewDeaths),
            lable:'Death',
            color: {
              color1:'#ff6384',
              color2:'#ff638574'
            }
          }
          break;
        case 'recovered':
          result = {
            date: covidData.value.map(item=>item.Date.split("T")[0]),
            data: covidData.value.map(item=>item.NewRecovered),
            lable:'Recovered',
            color: {
              color1:'#4bc0c0',
              color2:'#4bc0c07b'
            }
          }
          break
        default:
          break
      }
    }
    return result
  },[covidData,graphName])

  const graphOptions:{name:string, value:graphNameInterface['graphName']}[] = [
    {
      name:'New Cases',
      value: 'cases'
    },
    {
      name:'Death',
      value:'death'
    },
    {
      name:'Recovered',
      value:'recovered'
    },
  ]

  
  const latestData = useMemo(()=>{
    return covidData.value[covidData.value.length-1]
  },[covidData])

  return (
    <DashBordWrapper className='container'>
        <DashbordHeader 
          options={graphOptions} 
          graphChangeHandler={graphChangeHandler} 
          currentGraphName={graphName.graphName}
          />
        <div className="row">
            <div className="col-12 col-l-8">
                <RenderByStatus
                   element={<Graph 
                      data={graphData.data} 
                      lable={graphData.lable} 
                      date={graphData.date}
                      color={graphData.color}
                      />}
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