import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import { useLocation } from 'react-router-dom'

function NotFoundSection({data="This Page"}){

    return <><h1 style={{textAlign:'center'}}><span style={{color:"red"}}>"{data}"</span> Is Not found!</h1></>
}

export default function NotFound() {
  return (
    <>
    <Header />
      <Nav />
      <NotFoundSection data={useLocation().pathname.replace('/','')} />
    </>
  )
}
