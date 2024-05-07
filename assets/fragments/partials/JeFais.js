
import React from "react";

class JeFais extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                metiers: [],
                error: null,
            };
        }
    
        componentDidMount() {
            fetch('https://127.0.0.1:8000/infos')
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                   
    
                    // Vérifiez si les données ont `message` et `message.metiers` et si c'est un tableau
                    if (data && data.message[0] && Array.isArray(data.message[0].metier)) {
                        this.setState({ metiers: data.message[0].metier });
                    } else {
                        console.error('Data does not contain valid metiers data');
                        this.setState({ error: 'Data does not contain valid metiers data' });
                    }
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                    this.setState({ error: error.message });
                });
        }

    render() {
        const { metiers, error } = this.state;

        if (error) {
            return <div>Error: {error}</div>;
        }

        if (metiers.length === 0) {
            return <div>Loading...</div>;
        }

        return (
            <>
            {metiers.map(metier => (
                <div key={metier.id} className="col-lg-4 wow fadeIn" data-wow-delay=".2s">
                    <div className="de_3d-box">
                        <div className="d-inner">
                            <i className="icon_genius id-color"></i>
                            <div className="text">
                                <h3>{ metier.title }</h3>
                                { metier.description }
                            </div>
                        </div>
                    </div>
                </div>
           ))} </>);
    }
}

export default JeFais;