import React from 'react'
import styled from 'styled-components'

type Props = {
    title:string,
    value?:number | string,
}

const InformationItem = ({title,value='No Data'}: Props) => {
  return (
    <InformationItemWrapper>
        <h5 className='information-subtitle'>{title}</h5>
        <h4 className='information-value'>{value}</h4>
    </InformationItemWrapper>
  )
}

export default InformationItem

const InformationItemWrapper = styled.div`
    .information-subtitle{
        margin-bottom: .4rem;
    }
    .information-value{
        margin-left: .4rem;
        font-weight: 400;
    }
`