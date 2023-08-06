

const Submit = () => {
    return (
        <div className="submit block">
            <div className="wrapper">
                <div className="submit__block grid_2">
                    <div className="submit__Title">
                        <h1 className="title">Enter your email address for our mailing Promo or other interesting things</h1>
                    </div>
                    <form className="submit__form grid_2">
                        <input type="email" placeholder="Enter your email"/>
                        <input type="submit" value="Submit"/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Submit;