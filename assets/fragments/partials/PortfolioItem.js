import React from "react";

class PortfolioItem extends React.Component {

    render() {

        return (
            <>
                <div className="col-md-4 item">
                    <div className="de_modal wow" data-url="single-project.html">
                        <div className="card-image-1 mod-c" data-tilt>
                            <div className="d-text">
                                <h3>Single Image</h3>
                                <h5 className="d-tag">website</h5>
                            </div>
                            <img src="/images/gallery/1.jpg" className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-md-4 item">
                    <div className="de_modal wow" data-url="single-project-2.html">
                        <div className="card-image-1 mod-c" data-tilt>
                            <div className="d-text">
                                <h3>Multiple Images</h3>
                                <h5 className="d-tag">website</h5>
                            </div>
                            <img src="/images/gallery/2.jpg" className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-md-4 item">
                    <div className="de_modal wow" data-url="single-project-3.html">
                        <div className="card-image-1 mod-c" data-tilt>
                            <div className="d-text">
                                <h3>Self Hosted Video</h3>
                                <h5 className="d-tag">website</h5>
                            </div>
                            <img src="/images/gallery/3.jpg" className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-md-4 item">
                    <div className="de_modal wow" data-url="single-project.html">
                        <div className="card-image-1 mod-c" data-tilt>
                            <div className="d-text">
                                <h3>Bluetec App</h3>
                                <h5 className="d-tag">website</h5>
                            </div>
                            <img src="/images/gallery/4.jpg" className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-md-4 item">
                    <div className="de_modal wow" data-url="single-project.html">
                        <div className="card-image-1 mod-c" data-tilt>
                            <div className="d-text">
                                <h3>Uhost Hosting</h3>
                                <h5 className="d-tag">website</h5>
                            </div>
                            <img src="/images/gallery/5.jpg" className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-md-4 item">
                    <div className="de_modal wow" data-url="single-project.html">
                        <div className="card-image-1 mod-c" data-tilt>
                            <div className="d-text">
                                <h3>Bolo Creative</h3>
                                <h5 className="d-tag">website</h5>
                            </div>
                            <img src="/images/gallery/6.jpg" className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default PortfolioItem;

