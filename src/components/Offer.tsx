import {Link} from "react-router-dom";


interface OfferType{
    img:string,
    title:string
}


const plants:OfferType[]=[
    {
        img:"offer (1).jpg",
        title:"Spider Plant"
    },
    {
        img:"offer (2).jpg",
        title:"Peace Lily"
    },

    {
        img:"offer (3).jpg",
        title:"Rubber Plants"
    },

    {
        img:"offer (4).jpg",
        title:"Elephant Ear Plants"
    },

    {
        img:"offer (5).jpg",
        title:"Snake Plants"
    },

    {
        img:"offer (6).jpg",
        title:"Ferns"
    },

    {
        img:"offer (7).jpg",
        title:"Pothos"
    },

    {
        img:"offer (8).jpg",
        title:"English Ivy"
    },
]


const Offer = () => {
    return (
        <div className="offer block">
            <div className="wrapper">
                <div className="offer_block">
                    <div className="offer__title">
                        <h1 className="title">
                            What we offer to you
                        </h1>
                    </div>
                    <div className="offer__items grid_4">
                        {plants.map(item=>
                            <div key={item.title} className="offer__item">
                                <img src={require("../assets/images/offer/"+item.img)} alt={item.img}/>
                                <p className="text">{item.title}<Link className="offerLink" to={"/"+""}>read more</Link></p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offer;