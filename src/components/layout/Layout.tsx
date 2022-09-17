import React from 'react'
import Header from './header/Header'

interface Props {
    children: React.ReactNode;
    title:string
}

const Layout : React.FC<Props> = ({children,title}) => {
  return (
    <>
      <Header title={title}/>
        {children}
    </>
  )
}

export default Layout