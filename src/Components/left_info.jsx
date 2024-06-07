import React from 'react'
import '../Css/left_info.css'

export default function LeftInfo() {
    return (
        <div className="left-info-container">

            <img src="images/vertical dashed line.svg" alt="" />

            <div className="page-title">

                <h4>AYUSH</h4>
                <div className="title-back-container">
                </div>
            </div>

            <div className="verticle-container">
                <h3>Visit my Social Handles</h3>
                <div className="social-media-handles">
                    <a href="https://www.linkedin.com/in/ayushkankane"><img src="images/linkdn.svg" alt="" /></a>
                    <a href="#"><img src="images/ig.svg" alt="" /></a>
                    <a href="#"><img src="images/twitter.svg" alt="" /></a>
                    <a href="https://github.com/Ayush-97k"><img src="images/github.svg" alt="" /></a>

                </div>
            </div>
        </div>
    )
}
