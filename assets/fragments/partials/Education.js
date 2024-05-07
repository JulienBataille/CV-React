import React from "react";

class Education extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            educations: [],
            error: null,
        };
    }

    componentDidMount() {
        fetch('http://127.0.0.1:8000/education')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                //console.log(data.message);
                this.setState({ educations: data.message });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                this.setState({ error: error.message });
            });
    }

    render() {
        const { educations, error } = this.state;

        if (error) {
            return <div>Error: {error}</div>;
        }

        if (!educations || educations.length === 0) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <ul>
                    {Array.isArray(educations) && educations.map(education => (
                        <li key={education.id} className="d_timeline-item">
                            <h3 className="d_timeline-title">{education.start.slice(0,4)}-{ education.finish.slice(0,4) }</h3>
                            <p className="d_timeline-text">
                                <span className="d_title">{education.title}</span>
                                <span className="d_company">{education.company}</span>
                                {education.description}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Education;
