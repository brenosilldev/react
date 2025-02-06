import React  from "react"
import { Routes, Route } from "react-router-dom"
import Home from "../pages/home/index";
import  {Layout} from "../componentes/layout/layout"
import { Signin} from "../pages/sign-in/sign-in"

const Shop = ()=>{
    return(
        
        <h1>Gwlooo</h1>
    )
}

const Rotas = () =>{

    return(
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route  path="Shop" element={<Shop />} />
                    <Route  path="SignIn" element={<Signin />} />
                </Route>
                
            </Routes>
            
        
        
        </>
    )
}

export  {Rotas};