import React from "react";
import h from './hello.module.css'
import logo from '../assets/images/Logo.png'
import girl from '../assets/images/girl.png'
import bgBlur from '../assets/images/girl.png'

const Hello = (props) => {

    return (
        <div className={h.helloBlock} style={{backgroundImage: `url(${bgBlur})`}}>
            <div className={h.helloBlockTop}>
                <div className={h.logoGirl}>
                    <img src={logo} alt="logo"/>
                </div>
                <div className={h.searchInfo}>
                    <div className={h.searchSection}>
                        <div><span>Search</span></div>
                        <div><span>Collection</span><p className={`${h.arrow} ${h.arrowDown}`}></p></div>
                    </div>
                    <div className={h.helloInfo}>
                        <div className={h.event}>
                            <h1>Summer</h1>
                            <h1>Collection</h1>
                            <h3>25%<span> OFF</span></h3>
                            <button className={h.helloBtn}>Details</button>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}
export default Hello;
