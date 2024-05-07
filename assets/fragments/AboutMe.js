import React from "react";
import Capa from "../fragments/partials/Capa";

class AboutMe extends React.Component {

    render() {

        return (
            <>
                <section id="section-about">
                    <div className="container relative">
                        <div className="row">
                            <div className="col-md-12 text-center wow fadeInUp">
                                <h2>About Me</h2>
                                <div className="space-border"></div>
                            </div>
                            <div className="col-md-8 offset-md-2 text-center wow fadeInUp">
                                <p>I am a website designer from Lousiana, with a strong focus in UI/UX design. I love to get new experiences and always learn from my surroundings. I've done more than 285 projects. You can check it through portfolio section on
                                    this website. I looking forward to any opportunities and challenges. </p>
                            </div>
                            <div className="spacer-single"></div>
                            <Capa />
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default AboutMe;