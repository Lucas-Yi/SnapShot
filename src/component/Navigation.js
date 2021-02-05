import React from "react"
import {Link} from "react-router-dom"

const Navigation = ()=>{
    return <div>
        <Link to='/'>
            <button>Mountain</button>
        </Link>
        <Link to='/Beach'>
            <button>Beaches</button>
        </Link>
        <Link to='/Bird'>
            <button>Birds</button>
        </Link>
        <Link to='/Food'>
            <button>Food</button>
        </Link>
    </div>
}

export default Navigation

