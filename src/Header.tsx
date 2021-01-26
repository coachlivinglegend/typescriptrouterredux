import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const style={
        display: "flex"
    }
    return (
        <header style={style} className="app__header">
        {/* <li onClick>Page 1</li> */}
        <li>Page 2</li>
        <Link to='/'> Home </Link>
        <Link to='/page1'> Page 1 </Link>
        <Link to='/page2'> Page 2 </Link>
        <Link to='/page3'> Page 3 </Link>
        <Link to='/page4'> Page 4  </Link>
        <li>Page 6</li>
      </header>
    )
}

export default Header
