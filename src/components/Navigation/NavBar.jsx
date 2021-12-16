import React from 'react'
import './NavBar.css'
import {Link} from 'react-router-dom'

function NavBar(){
    return(
        <div>
            <header>
                    <Link to='/'>home</Link>
                    <Link to='/create'>newBlog</Link>
            </header>
        </div>
    )
}
export default NavBar