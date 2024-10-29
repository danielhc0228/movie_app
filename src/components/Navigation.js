import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <div className='nav'>
            <h1>
                <Link to='/'>Hojin Movie</Link>
            </h1>
            <ul class='list'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>
            <button class='search'>Search</button>
            <button className='menu'></button>
        </div>
    );
}

export default Navigation;
