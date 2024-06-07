import React from 'react'
import '../Css/nav.css'

export default function Nav() {
    return (
        <div className="nav-container">
            <img src="images/horizontal dashed line.svg" alt="" />

            <div className="nav-flex">
                <a href="#">About</a>
                <a href="#">Work</a>
                <a href="#">Blog</a>
            </div>
        </div>
    )
}
