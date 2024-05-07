import React from "react";

class Capa extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            capacities: [],
            error: null,
        };
    }

    componentDidMount() {
        fetch('http://127.0.0.1:8000/infos')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                // console.log(data.message[0]); // Pour déboguer et voir la structure des données

                // Vérifiez si les données ont `message` et `message.capacities` et si c'est un tableau
                if (data && data.message[0] && Array.isArray(data.message[0].capacities)) {
                    this.setState({ capacities: data.message[0].capacities });
                } else {
                    console.error('Data does not contain valid capacities data');
                    this.setState({ error: 'Data does not contain valid capacities data' });
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                this.setState({ error: error.message });
            });
    }

    render() {
        const { capacities, error } = this.state;

        if (error) {
            return <div>Error: {error}</div>;
        }

        if (capacities.length === 0) {
            return <div>Loading...</div>;
        }

        return (
            <>
                {capacities.map(capacity => (<div key={capacity.id} className="col-lg-3 position-relative wow fadeIn" data-wow-delay=".2s">

                    <div className="position-relative">
                        <div className="progressbar" data-animate="false">
                            <div className="circle" data-percent={capacity.percent}>
                                <div></div>
                            </div>
                            <h4>{capacity.title}</h4>
                        </div>
                    </div>

                </div>
                ))} </>);
    }
}

export default Capa;
