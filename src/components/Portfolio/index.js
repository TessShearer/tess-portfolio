import React from 'react';
import AfterParty from '../../assets/images/afterparty_screenshot.png'
import Karate from '../../assets/images/karate-screenshot.png'
import RunBuddy from '../../assets/images/Run-Buddy.jpeg'
import Weather from '../../assets/images/weather-dashboard.png'
import Wordle from '../../assets/images/wordle-screenshot.png'
import WhattoWatch from '../../assets/images/What-to-watch.png'

function Portfolio() {
    return (
        <section className="my-5 portfolio">
            <div className="row">
                <div className="col-1">
                </div>
                <div className="col-5 portfolio-apps">
                    <h3>AfterParty</h3>
                    <a href="https://tessshearer.github.io/afterParty/" target="_blank" rel="noreferrer"> <img
                        src={AfterParty} className="picture-link" alt="The Afterparty Application" /> </a>
                    <div>
                        <a href="https://github.com/TessShearer/afterParty" target="_blank" rel="noreferrer" className="github-link">View Github Repository Here</a>
                    </div>
                </div>
                <div className="col-5 portfolio-apps">
                    <h3>Cory's Karate</h3>
                    <a href="https://github.com/CoryTessFisher/CorysKarate2020" target="_blank" rel="noreferrer"> <img
                        src={Karate} className="picture-link" alt="Cory's Karate Website" /> </a>
                    <div>
                        <a href="https://coryskarate.com/" target="_blank" rel="noreferrer" className="github-link">View Github Repository Here</a>
                    </div>
                </div>
                <div className="col-1">
                </div>
            </div>
            <div className="row">
                <div className="col-1">

                </div>
                <div className="col-5 portfolio-apps">
                    <h3>Run Buddy</h3>
                    <a href="https://tessshearer.github.io/run-buddy/" target="_blank" rel="noreferrer"> <img
                        src={RunBuddy} className="picture-link" alt="The Run Buddy Front End Application" /> </a>
                    <div>
                        <a href="https://github.com/TessShearer/run-buddy" target="_blank" rel="noreferrer" className="github-link">View Github Repository Here</a>
                    </div>
                </div>
                <div className="col-5 portfolio-apps">
                    <h3>Wordle Filter</h3>
                    <a href="https://tessshearer.github.io/5letters/" target="_blank" rel="noreferrer"> <img
                        src={Wordle} className="picture-link" alt="A Wordle Filter Application" /> </a>
                    <div>
                        <a href="https://github.com/TessShearer/5letters" target="_blank" rel="noreferrer" className="github-link">View Github Repository Here</a>
                    </div>
                </div>
                <div className="col-1">

                </div>
            </div>
            <div className="row">
                <div className="col-1">

                </div>
                <div className="col-5 portfolio-apps">
                    <h3>Weather Dashboard</h3>
                    <a href="https://tessshearer.github.io/Weather-Dashboard/" target="_blank" rel="noreferrer"> <img
                        src={Weather} className="picture-link" alt="The Weather Dashboard Application"/> </a>
                    <div>
                        <a href="https://github.com/TessShearer/Weather-Dashboard" target="_blank" rel="noreferrer" className="github-link">View Github Repository Here</a>
                    </div>
                </div>
                <div className="col-5 portfolio-apps">
                    <h3>Movie Search Engine</h3>
                    <a href="https://pacific-anchorage-44756.herokuapp.com/" target="_blank" rel="noreferrer"> <img
                        src={WhattoWatch} className="picture-link" alt="The Social Network Application" /> </a>
                    <div>

                        <a href="https://github.com/TessShearer/what-to-watch" target="_blank" rel="noreferrer" className="github-link">View GitHub Repository</a>
                    </div>
                </div>
                <div className="col-1">

                </div>

            </div>
        </section>
    );
}

export default Portfolio;