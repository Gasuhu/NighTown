import React, { useEffect,useState} from 'react'
import Overview from './overview'
import Game from './game'
import Post from './Post'
import {Routes ,Route,Navigate } from 'react-router-dom'
import Login from './Login'
import Nav from './nav'
const Rout = () =>
{
    let [user,setUser] = useState(null);
    useEffect(()=>
    {
        const getUser=async ()=>{
            fetch("https://server2-ap0s.onrender.com/auth/login/success",{
                methode:"GET",
                credentials:"include",
                hraders:{
                    Accept:"application/json",
                    "content-Type" :"application/json",
                    "Access-Control-Allow-Credentials":true,
                }
            }).then(response=>{
                if(response.status===200) return response.json()
                throw new Error("authenticfication has been failed!")
            }).then(resObject=>{
                setUser(resObject.user)
            }).catch(err=>{
                console.log(err)
            })
        }
        getUser()
    },[])

    return (
        <>
        <Nav user={user}/>
        <Routes>    
            <Route path="/" element={<Overview/>}/>
            <Route path="/game" element={<Game user={user}/> }/>
            <Route path="/post/:id"element={<Post/>}/>
            <Route path="/login"element={user ? <Navigate to="/"/> : <Login />}/>
        </Routes>
        </>
    )
}
export default Rout