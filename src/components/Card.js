import "../css/Card.css";
import React from "react";
import ethLogo from "../images/icon-ethereum.svg";
import clockLogo from "../images/icon-clock.svg";


class card extends React.Component {
    render() { 
        return (
            <div>
                <div id="card">
                    <a href="/images/image-equilibrium.jpg" className="imgHover" target="_blank">
                    <img  className="mainImage" src={require("../images/image-equilibrium.jpg")} alt="NFT" />
                    </a>
                    <div id="info">
                        <h2><a href="/">Equilibrium #3429</a></h2>
                        <p>our Equilibrium collection promotes balance and calm.</p>
                        <div id="priceXtime">
                            <span id="eth">
                                <img src={ethLogo} alt="Ethereum icon" />
                                <p>0.041 ETH</p>
                            </span>
                            <span id="clock">
                                <img src={clockLogo} alt="Clock icon" />
                                <p>3 days left</p>
                            </span> 
                        </div>
                        <div id="author">
                            <img src={require("../images/image-avatar.png")} alt="Avatar" />
                            <p>Creation of <a href="/">Jules Wyvern</a></p>
                        </div>
                    </div>   
                </div>
                <div className="attribution">
                    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
                    Coded by <a href="https://github.com/bugvlopper" target="_blank" rel="noreferrer">Bugvlopper</a>.
                </div>
            </div>
            
        );
    }
}
 
export default card;