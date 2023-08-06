import React from 'react';


type SocialItem = {
    img: string,
    link: string
}


const socialItem: SocialItem[] = [
    {
        img: "facebook.png",
        link: "https://www.facebook.com/"
    },
    {
        img: "instagram.png",
        link: "https://www.instagram.com/"
    },
    {
        img: "twitter.png",
        link: "https://twitter.com/"
    },
]

const Footer = () => {
    return (
        <footer className="footer">
            <img src="" alt=""/>
            <div className="wrapper">
                <div className="footer__block">
                    <h1 className="footerTitle title">Feel free to contact us</h1>
                    <div className="social">
                        {socialItem.map(item =>
                            <a key={item.img.substring(0, item.img.length - 4)} className="socialItem" target="_blank" href={item.link}>
                                <img src={require("../assets/images/footer/" + item.img)}
                                     alt={item.img.substring(0, item.img.length - 4)}/>
                            </a>
                        )}
                    </div>

                </div>
            </div>

            <img className="vector1" src={require("../assets/images/footer/Vector1.png")} alt="vector"/>
            <img className="vector2" src={require("../assets/images/footer/Vector2.png")} alt="vector"/>

            <div className="bottom__footer">
                <p className="text">Copyright © 2021 Lush. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;