import React from 'react'
import { DataStateInterface } from '../../../features/covidData/covidDataSlice';
import Loading from '../../ui/Loading'

type Props = {
    status:DataStateInterface['status']
    element:React.ReactNode|React.ReactElement|JSX.Element;
}

const RenderByStatus = ({status,element}:Props) => {
    switch(status){
        case 'idle':
            return <MessageElement message='Please wait to start loading'/>
        case 'loading':
            return <Loading/>
        case 'succeeded':
            return <>{element}</>
        case 'failed':
            return <MessageElement message='Something went wrong try again.'/>
        default:
            return <div/>
    }
}

export default React.memo(RenderByStatus)

interface MessageType{
    message:string
}

const MessageElement = ({message}:MessageType) => {
    return(
        <h2>{message}</h2>
    )
}