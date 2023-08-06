import {ReactElement} from "react";
import Type1 from "../assets/images/plants/Type1";
import Type2 from "../assets/images/plants/Type2";
import Type3 from "../assets/images/plants/Type3";


interface plant{
    img: ReactElement,
    title: string,
    text: string
}


const types: plant[] = [
    {
        img: <Type1/>,
        title: "Indoor Plants",
        text: "Bring the beauty of nature to your outdoor spaces with our wide selection of outdoor plants"
    },
    {
        img: <Type2/>,
        title: "Outdoor Plants",
        text: "Bring a touch of greenery to your living spaces with our collection of indoor plants, perfect for purifying the air and adding a natural touch to your home."
    },
    {
        img: <Type3/>,
        title: "Plants Pots",
        text: "Add a touch of style to your indoor or outdoor spaces with our collection of pots plants, available in a variety of sizes and designs to fit any decor"
    },
]


const Plants = () => {
    return (
        <div className="plants block">
            <div className="wrapper">
                <div className="plants__block">
                    <div className="description grid_2">
                        <h1 className="title">
                            We Help choose the most suitable plants for you
                        </h1>
                        <p className="text">
                            Our selection includes a wide variety of flowers, from classic roses to exotic orchids, as
                            well as a variety of lush indoor and outdoor plants and also offer unique floral
                            arrangements that are perfect for any occasion, whether you're looking to brighten up your
                            home or send a thoughtful gift.
                        </p>
                    </div>

                    <div className="plantTypes grid_3">
                        {types.map(item =>
                            <div key={item.title} className="plantType">
                                {item.img}
                                <h2 className="subTitle">{item.title}</h2>
                                <p className="text">{item.text}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Plants;