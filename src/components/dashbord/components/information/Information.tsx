import React from 'react'
import styled from 'styled-components'
import { CovidDataInterface } from '../../../../features/covidData/apiManager'
import InformationItem from './InformationItem'


type Props = {
    data:CovidDataInterface
}

const Information = ({data}: Props) => {
  return (
    <InformationWrapper>
        <h4 className='information-title'>Covid-19 overview</h4>
        <div className="row">
            <div className="col-6">
                <InformationItem
                   title='Total cases'
                   value={data.TotalConfirmed}
                   />
            </div>
            <div className="col-6">
                <InformationItem
                   title='Todays Cases'
                   value={data.NewConfirmed}
                   />
            </div>
            <div className="col-6">
                <InformationItem
                   title='Total death'
                   value={data.TotalDeaths}
                   />
            </div>
            <div className="col-6">
                <InformationItem
                   title='Todays death'
                   value={data.NewDeaths}
                   />
            </div>
            <div className="col-6">
                <InformationItem
                   title='Recovered'
                   value={data.TotalRecovered}
                   />
            </div>
            <div className="col-6">
                <InformationItem
                   title='Todays Recovered'
                   value={data.NewRecovered}
                   />
            </div>
            <div className="col-6">
                <InformationItem
                   title='Active'
                   value={data.TotalConfirmed - (data.TotalRecovered + data.TotalDeaths)}
                   />
            </div>
            <div className="col-6">
                <InformationItem
                   title='Critical'
                   />
            </div>
        </div>
    </InformationWrapper>
  )
}

export default React.memo(Information);


const InformationWrapper = styled.div`
    .information-title{
        margin-bottom: 1rem;
    }
    .information-divider{
        border-bottom: 1px solid #c5c5c5;
        margin: 1rem .6rem;
    }
`