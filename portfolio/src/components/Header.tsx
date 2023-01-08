import React from 'react'

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo-box">
                {/** logo or headshot here*/}
                <img src="" alt="logo" className="header__logo" style={{display: "none"}}/>
            </div>

            <div className="header__text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">Shawna Staff</span>
                    <span className="heading-primary--sub">Full-Stack Engineer</span>
                </h1>
                <a href="#" className="btn btn--white btn--animated">Contact Me</a>
            </div>
        </header>
    )
}

export default Header