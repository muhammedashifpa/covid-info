import React from 'react'
import Footer from './footer/Footer'
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
      <Footer/>
    </>
  )
}

export default Layout