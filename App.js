import React, {useState, useEffect} from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'
import Profile from './Profile'
import Dashboard from './Dashboard'
import Dash from './Dash'
import { auth } from './firebase'
import { onAuthStateChanged } from 'firebase/auth'
import './Dashboard.css'



export default function App() {
  const[user, setUser] = useState("")
  useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
      if(user){
        setUser(user.email.substr(0,user.email.indexOf("@")))
      }
      else{
        setUser("")
      }
    })
  })
  return (
    <div className = "box">
      <div className = "q">Board.</div>
      <div className = "w"><BrowserRouter>
       <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/signup' element={<Signup/>}/>
         <Route path='/profile' element={<Profile user = {user}/>}/>
         <Route path='/dashboard' element={<Dashboard/>}/>
         <Route path='/dash' element={<Dash/>}/>
         
         
       </Routes>
      </BrowserRouter>
      </div>
    </div>
  )
}
