import React from 'react'
import styled from 'styled-components'
import { useAppDispatch } from '../../../app/hooks'
import { fetchDataCountryAsync } from '../../../features/covidData/covidDataSlice'

type Props = {}

const DashbordHeader = (props: Props) => {
  const dispatch = useAppDispatch()
  return (
    <DashbordHeaderWrapper>
        <button onClick={()=>dispatch(fetchDataCountryAsync())}>get data of country</button>
    </DashbordHeaderWrapper>
  )
}

export default DashbordHeader

const DashbordHeaderWrapper = styled.div`
    margin-bottom: 2rem;
`