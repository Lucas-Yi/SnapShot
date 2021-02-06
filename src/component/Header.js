import React, { useState } from "react"
import Navigation from "./Navigation"
import { useHistory } from "react-router-dom"

const Header=({history})=>{
    const [searchContent, setSearchContent] = useState("")

    const handleSearchClick=()=>{
        let url = `/search/${searchContent}`
        history.push(url)
    }

    return <div>
      <h1>SnapShot</h1>
      <div className='search-area'>
        <input 
            type='text' 
            placeholder='Search'
            onChange={(e)=>setSearchContent(e.target.value)} 
            value={searchContent}>
        </input>
        <button 
          className={`search-button ${searchContent.trim() ? "active" : null}`} 
          onClick={handleSearchClick}>
            search
          </button>
      </div>
      <Navigation />
    </div>
}

export default Header