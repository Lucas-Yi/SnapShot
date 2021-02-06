import React from "react"
import {Link} from "react-router-dom"

const Navigation = ()=>{
    return <nav className="main-nav">
        <ul>
            <li><Link to='/'>Mountain</Link></li>
            <li><Link to='/Beach'>Beaches</Link></li>
            <li><Link to='/Bird'>Birds</Link></li>
            <li><Link to='/Food'>Food</Link></li>
        </ul>
    </nav>
}

export default Navigation

