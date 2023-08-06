import React from 'react';


interface blogItems{
    img: string,
    title: string,
    text: string,
    date: string
}

const blogItems = [
    {
        img: "blog (1).png",
        title: "More productive with an atmosphere of greenery",
        text: "An atmosphere of greenery can increase productivity in the workplace. Studies show that plants improve air quality and decrease stress...",
        date: "January 20, 2023"
    },
    {
        img: "blog (2).png",
        title: "The benefits of plants in your room",
        text: "Plants in your room can bring numerous benefits, such as improved air quality, reduced stress, and increased feelings of well-being....",
        date: "January 10, 2023"
    },
    {
        img: "blog (3).png",
        title: "Hobbyist plants in the house",
        text: "Having hobbyist plants in the house is a great way to bring nature indoors. Not only do they purify the air, but they....",
        date: "January 15, 2023"
    },

]


const Blog = () => {
    return (
        <div className="blog block">
            <div className="wrapper">
                <div className="blog_block">
                    <div className="blog__title">
                        <h1 className="title">Interesting blog to read</h1>
                    </div>
                    <div className="blog__items grid_3">
                        {blogItems.map(item=>
                            <div key={item.title} className="blog__item">
                                <img src={require("../assets/images/blog/"+item.img)} alt={item.title}/>
                                <h2 className="subTitle">{item.title}</h2>
                                <p className="text">{item.text}</p>
                                <div className="dateRead">
                                    <div className="date">
                                        <img src={require("../assets/images/blog/date.png")} alt="date"/>
                                        <span>{item.date}</span>
                                    </div>
                                    <a href="">Read More &#8594;</a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;