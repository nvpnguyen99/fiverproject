import React from 'react'
import { Route } from 'react-router-dom'
import Footer from './layout/Footer'
import Header from './layout/Header'
import { Toaster } from 'react-hot-toast';
export default function HomeTemplate(props) {
  return <Route exact path={props.path} render={(propsRoute) => { 
    return <>
    <Header/>
    <props.component {...propsRoute}/>
    <Toaster />
    <Footer/>
    </>
   }}/>
}
