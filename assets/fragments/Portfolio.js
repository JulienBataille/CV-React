import React from "react";
import PortfolioItem from "../fragments/partials/PortfolioItem";

class Portfolio extends React.Component {

    render() {

        return (
            <>
                <section id="section-portfolio" className="no-bottom">
                    <div className="container relative">
                        <div className="row">
                            <div className="col-md-12 text-center wow fadeInUp">
                                <h2>Portfolio</h2>
                                <div className="space-border"></div>
                            </div>
                        </div>
                        <div id="gallery" className="row sequence">
                           <PortfolioItem />
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default Portfolio;

