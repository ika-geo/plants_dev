interface TestimonialsType{
    img: string,
    name: string,
    text: string,
    vector:String
}

const TestimonialsItems: TestimonialsType[] = [
    {
        img: "user (1).png",
        name: "Jessica Watson",
        text: "'Highly recommend this website for quality flowers and plants. Great prices, timely delivery and excellent customer service.'",
        vector: "Vector (1).png",
    },

    {
        img: "user (2).png",
        name: "Kate Szu",
        text: "'Great service, beautiful flowers, timely delivery. Highly recommend.'",
        vector: "Vector (2).png",
    },

    {
        img: "user (3).png",
        name: "Grace ",
        text: "'I am very happy with my purchase from this website, the plants were healthy and arrived on time.'",
        vector: "Vector (3).png"
    },
]


const Testimonials = () => {
    return (
        <div className="testimonials block">
            <div className="wrapper">
                <div className="testimonials__block">
                    <div className="testimonials__title">
                        <h1 className="title">What do they say about us</h1>
                    </div>
                    <div className="testimonials__items grid_3">
                        {TestimonialsItems.map(item=>
                            <div key={item.name} className="testimonials__item">
                                <img className="vector" src={require("../assets/images/testimonials/" + item.vector)} alt="vector"/>
                                <div className="user">
                                    <img src={require("../assets/images/testimonials/"+item.img)} alt=""/>
                                    <span className="subTitle">{item.name}</span>
                                </div>
                                <p className="text">{item.text}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;