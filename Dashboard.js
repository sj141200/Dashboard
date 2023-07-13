import React from 'react'
import './Dashboard.css'
import { Link } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div className = "db">
        <div><Link to="/Dash">Dashboard</Link></div><br/>
        <div>Transaction</div><br/>
        <div>Schedule</div><br/>
        <div>Users</div><br/>
        <div>Settings</div><br/>
       
      
    </div>
  )
}
