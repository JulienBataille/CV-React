import React from "react";
import JeFais from "../fragments/partials/JeFais";

class WhatIDo extends React.Component {

    render() {

        return (
            <>
                <section id="section-services" className="no-bottom">
                    <div className="container relative">
                        <div className="row">
                            <div className="col-md-12 text-center wow fadeInUp">
                                <h2>Ce que je fais</h2>
                                <div className="space-border"></div>
                            </div>
                            <div className="spacer-single"></div>
                            <div className="row g-0">
                                <JeFais/>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default WhatIDo;
