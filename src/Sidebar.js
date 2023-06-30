import React from 'react'
import './Sidebar.css'
import { Avatar } from '@mui/material'

function Sidebar() {

    const recentItem = (topic) => (
        <div className='sidebar__recentItem'>
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>
    )


  return (
    <div className='sidebar'>
        <div className='sidebar__top'>
            <img src="https://images.unsplash.com/photo-1536599018102-9f803c140fc1?auto=format&fit=crop&w=440&h=220&q=60" alt=""/>
            <Avatar className='sidebar__avatar'/>
            <h2>Jasmine Chandwani</h2>
            <h4>jasminechandwani@gmail.com</h4>
        </div>
      <div className='sidebar__stats'>
        <div className='sidebar__stat'>
            <p> Who viewed you</p>
            <p className='sidebar__statNumber'>2,534</p>
        </div>
        <div className='sidebar__stat'>
            <p>Views on post</p>
            <p className='sidebar__statNumber'>2,448</p>
        </div>
      </div>
      <div className='sidebar__button'>
        <p> Recent</p>
        {recentItem("reactjs")}
        {recentItem("softwareengineering")}
        {recentItem("design")}
        {recentItem("development")}
        {recentItem("programming")}
        
      </div>
    </div>
  )
}

export default Sidebar
