import Advantage1 from "../assets/images/advantages/Advantage1";
import Advantage2 from "../assets/images/advantages/Advantage2";
import Advantage3 from "../assets/images/advantages/Advantage3";
import Advantage4 from "../assets/images/advantages/Advantage4";


interface AdvantageItems{
    img: JSX.Element,
    title: string,
    text: string
}

const advantageItems: AdvantageItems[] = [
    {
        img: <Advantage1/>,
        title: "Quality Product",
        text: "Our flowers are of the highest quality, carefully selected and sourced from reputable"
    },

    {
        img: <Advantage2/>,
        title: "Always Fresh",
        text: "Our flowers are always fresh, handpicked and delivered promptly for maximum longevity and enjoyment."
    },

    {
        img: <Advantage3/>,
        title: "Work Smart",
        text: "We work smart, using innovative techniques and technology to streamline our processes"
    },

    {
        img: <Advantage4/>,
        title: "Excelent Service",
        text: "We pride ourselves on providing excellent service, going above and beyond to meet our customers' needs"
    },
]

const Advantages = () => {
    return (
        <div className="advantages block">
            <div className="wrapper">
                <div className="advantages--Block grid_2">
                    <div className="advantages__mainImg">
                        <img src={require("../assets/images/advantages/advantagesMain.png.png")} alt="plants room"/>
                    </div>
                    <div className="advantages__items grid_2">
                        {advantageItems.map(item=>
                            <div key={item.title} className="advantageItem">
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

export default Advantages;