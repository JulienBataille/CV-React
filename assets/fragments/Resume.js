import React from 'react';
import Experiences from '../fragments/partials/Experiences';
import Education from '../fragments/partials/Education';


class Resume extends React.Component 
{
    
    render() {
        return (
            <section id="section-resume">
            <div className="container relative">
                <div className="row">
                    <div className="col-md-12 text-center wow fadeInUp">
                        <h2>My Resume</h2>
                        <div className="space-border"></div>
                    </div>
                </div>
                <div className="row gh-5">
                    <div className="col-lg-6 wow fadeInUp">
                        <div className="p-4">
                            <h3 className="s_border">Experiences</h3>
                            <ul className="d_timeline">
                               <Experiences/>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp">
                        <div className="p-4">
                            <h3 className="s_border">Education</h3>
                            <ul className="d_timeline">
                                <Education/>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        );

    }

}
export default Resume;