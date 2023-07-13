import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from "./Signup.module.css"
import Inputform from './Inputform'
import { Link } from 'react-router-dom'
import { auth } from './firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import Profile from './Profile'
export default function Log() {
  const [values,setValues] = useState({
    email:"",
    password:""
  })

  const[btnDisabled,setBtnDisabled] = useState(false)

  const navigate = useNavigate()
  const [errMsg,setErrMsg] = useState("")
  const handleSubmission =()=>{
    if(!values.email ||!values.password){
      setErrMsg("Fill All Fields")
      setBtnDisabled(true)
      return
    }
    setErrMsg("")
    signInWithEmailAndPassword(auth, values.email, values.password).then((res)=>{
      navigate('/')
      const user = res.user;
      console.log(user)
      updateProfile(user,{
        displayName : values.name
      })
      navigate('/dashboard')
    }).catch((err)=>{
      setBtnDisabled(false)
      setErrMsg(err.message)
    })
  }
  return (
  
      <div className={styles.container}>
        <div className={styles.innerBox}>
          <h1 className={styles.heading}>Login Page</h1>
          
          <Inputform type="email" label="Email" placeholder="Enter Your Email"
          onChange={(event)=>
          setValues((prev)=>({...prev,email:event.target.value}))}/>
          <Inputform type="password" label="Password" placeholder="Enter Your Password"
          onChange={(event)=>
          setValues((prev)=>({...prev,password:event.target.value}))}
          />
          <div className={styles.footer}>
            <b className={styles.error}>{errMsg}</b>
            <button onClick={handleSubmission} disabled={btnDisabled}>Login</button>
           <div className={styles.account}>
              <p>Already have an Account?</p>
              <span>
                  <Link className={styles.link} to="/signup">Signup</Link>
               </span>
           </div>
          </div>
        </div>

      </div>
   
  )
}
