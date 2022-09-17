import React from 'react'
import styled from 'styled-components'

type Props = {
  title:string
}

const Header = (props: Props) => {
  return (
    <>
      <HeaderWrapper>
        <StyledContainer className='container'>
          <LeftHeader>
            <h3>{props.title}</h3>
            <div className='live-indicator'/>
          </LeftHeader>
          <RightHeader>
          </RightHeader>
        </StyledContainer>
      </HeaderWrapper>
      <HeaderSupport/>
    </>
  )
}

export default Header

const HeaderWrapper = styled.header`
  position: fixed ;
  top:0 ;
  left:0 ;
  right:0 ;
  z-index:999 ;
  box-shadow: 0 2px 2px -2px rgba(0,0,0,.2);
`


const StyledContainer = styled.div`
  height:50px;
  display:flex ;
  background-color: #fff;
  align-items: center;
`
const LeftHeader = styled.div`
  display:flex;
  align-items: center;
  gap:.5rem;
  .live-indicator{
    background-color: red;
    width: 15px;
    height: 15px;
    border-radius: 50%;
  }
`

const RightHeader = styled.div`
`
const HeaderSupport = styled.div`
  height:50px;
`