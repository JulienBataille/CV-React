import React from "react";

class PortfolioItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            portfolios: [],
            error: null,
        };
    }

    componentDidMount() {
        fetch('https://127.0.0.1:8000/portfolio')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log(data.message);
                this.setState({ portfolios: data.message });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                this.setState({ error: error.message });
            });
            
    }

    render() {
        const { portfolios, error } = this.state;

        if (error) {
            return <div>Error: {error}</div>;
        }

        if (!portfolios || portfolios.length === 0) {
            return <div>Loading...</div>;
        }

        return (
            <>
               {Array.isArray(portfolios) && portfolios.map(portfolio => (
                    <div key = { portfolio.id } className="col-md-4 mb-4 item">
                        <div className="de_modal wow" data-url="single-project.html">
                            <div className="card-image-1 mod-c" data-tilt>
                                <div className="d-text">
                                    <h3>{ portfolio.title }</h3>
                                    <h5 className="d-tag">{ portfolio.imageName }</h5>
                                </div>
                                <img src="images/gallery/1.jpg" className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>

                ))}</>);
    }
}

export default PortfolioItem;

