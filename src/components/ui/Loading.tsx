import React from 'react'
import styled from 'styled-components'

type Props = {}

const Loading = (props: Props) => {
  return (
    <LoadingWrapper>
        <div data-testid='loading-spinner' className='loading-spinner'/>
    </LoadingWrapper>
  )
}

export default Loading


const LoadingWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 7rem 0;
    .loading-spinner{
        border: 10px solid #e8e8e8;
        border-radius: 50%;
        border-top: 10px solid #3498db;
        width: 90px;
        height: 90px;
        -webkit-animation: spin 2s linear infinite; /* Safari */
        animation: spin 2s linear infinite;
    }

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`