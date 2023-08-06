


interface Gallery{
    img:string
}


const gallery:Gallery[]=[
    {img: "gallery (1).png"},
    {img: "gallery (2).png"},
    {img: "gallery (3).png"},
    {img: "gallery (4).png"},
    {img: "gallery (5).png"},
]



const Gallery = () => {
    return (
        <div className="gallery block">
            <div className="wrapper">
                <div className="gallery__block">
                    <div className="gallery__title">
                        <h1 className="title">Our Gallery View</h1>
                    </div>
                    <div className="gallery__items grid_3">
                        {gallery.map(item=>
                                <img className="gallery__item" key={item.img} src={require("../assets/images/gallery/"+item.img)} alt="plant gallery"/>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;