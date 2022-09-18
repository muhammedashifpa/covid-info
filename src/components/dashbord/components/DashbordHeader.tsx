import React from 'react'
import styled from 'styled-components'
import { graphNameInterface } from '../Dashbord';

type Props = {
  graphChangeHandler:(value:graphNameInterface['graphName'])=>void;
  options:{
    name:string,
    value:graphNameInterface['graphName']
  }[],
  currentGraphName:string
}

const DashbordHeader = ({graphChangeHandler,options,currentGraphName}: Props) => {

  const changehandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = (e.target as HTMLSelectElement).value 
    graphChangeHandler(value)
  }
  return (
    <DashbordHeaderWrapper>
      <select name="graphSelector" id="graphSelector" data-testid="graphSelector  " onChange={changehandler}>
        {options&&options.map((item,index)=>{
          return(
            <option key={index} value={item.value}>{item.name}</option>
          )
        })}
      </select>
    </DashbordHeaderWrapper>
  )
}

export default React.memo(DashbordHeader)

const DashbordHeaderWrapper = styled.div`
    padding: 2rem 0;
    select{
      padding: 1rem;
      option{
        padding: 1rem;
      }
    }
`