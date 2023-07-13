import React from 'react'
import Graph from './Graph.png'
import Pie from './Pie Chart.png'
import './Dashboard.css'

export default function Dash() {
  return (
    <div className = "row">
      <div className = "column1">Restaurant</div>
      <div className = "column2">Hotel</div>
      <div className = "column3">School</div>
      <div className = "column4">Theatre</div>


      <div><h1>Activities</h1></div>
      <div className = "graph"><img src = {Graph}/></div>

      <div><h1>Top Products</h1></div>
      <div className = "graph"><img src = {Pie}/></div>
    </div>


  )
}
