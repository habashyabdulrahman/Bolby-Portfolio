import React from 'react'

const AboutBox = () => {
  return (
    <div className="about-boxes grid">
        <div className="about-box">
            <i className="about-icon icon-fire"></i>
            <div>
                <h3 className="about-title">198</h3>
                <span className="about-subtitle">Project completed</span>
            </div>
        </div>

        <div className="about-box">
            <i className="about-icon icon-cup"></i>
            <div>
                <h3 className="about-title">5670</h3>
                <span className="about-subtitle">Cup of coffee</span>
            </div>
        </div>

        <div className="about-box">
            <i className="about-icon icon-people"></i>
            <div>
                <h3 className="about-title">427</h3>
                <span className="about-subtitle">Satisfied clients</span>
            </div>
            </div>

        <div className="about-box">
            <i className="about-icon icon-badge"></i>
            <div>
                <h3 className="about-title">35</h3>
                <span className="about-subtitle">Nominees winner</span>
            </div>
        </div>
    </div>
  )
}

export default AboutBox