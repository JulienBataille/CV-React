import React from "react";
import Titre from "../fragments/partials/Titre";
import Pays from "../fragments/partials/Pays";

class Presentation extends React.Component {

    render() {

        return (
            <>
                <section aria-label="section" className="jarallax no-top no-bottom text-light">
                    <img src="/images/background/1.jpg" className="jarallax-img" alt="" />
                    <div className="v-center">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-md-12">
                                    <h6 className="wow fadeInUp" data-wow-delay=".4s"><span className="id-color">I Am Kyros Noriaki</span></h6>
                                    <div className="spacer-10"></div>
                                    <div className="h1_big text-white wow fadeInUp" data-wow-delay=".6s">
                                        <div className="typed-strings">
                                            <Titre />
                                        </div>
                                        <div className="typed"></div>
                                    </div>
                                    <div className="spacer-20"></div>
                                    <ul className="list_location wow fadeInUp" data-wow-delay=".8s">
                                        <Pays />
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="index.html#section-about" className="mouse-icon-click scroll-to wow fadeInUp" data-wow-delay=".8s">
                        <span className="mouse fadeScroll relative" data-scroll-speed="10">
                            <span className="scroll"></span>
                        </span>
                    </a>
                    <div className="de-gradient-edge-bottom"></div>
                </section>
            </>
        );
    }
}

export default Presentation;

