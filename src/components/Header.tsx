import React from 'react';

const Header = () => {
    return (
        <header className="block">
            <div className="wrapper">
                <div className="header__block">
                    <div className="header__top">
                        <a href="#">
                            <img src={require("../assets/images/header/logo.png")} alt="logo"/>
                        </a>
                        <div className="call">
                            <a href="tel:+123456789">Call Us</a>
                        </div>
                    </div>
                    <div className="header__bottom">
                        <h1 className="header__title title">Nature's Beauty Delivered to You</h1>
                        <p className="header__text text">Nature's beauty is just a click away with our online flower and
                            plant shop. We offer a wide variety of flowers that will bring a touch of nature to your
                            home!</p>
                        <button className="header__bookNow">Book Now</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;