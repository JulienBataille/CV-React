import React from "react";

class Pays extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Locations: [],
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
                

                // Vérifiez si les données ont `message` et `message.Locations` et si c'est un tableau
                if (data && data.message[0] && Array.isArray(data.message[0].Location)) {
                    this.setState({ Locations: data.message[0].Location });
                } else {
                    console.error('Data does not contain valid Locations data');
                    this.setState({ error: 'Data does not contain valid Locations data' });
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                this.setState({ error: error.message });
            });
    }

    render() {
        const { Locations, error } = this.state;

        if (error) {
            return <div>Error: {error}</div>;
        }

        if (Locations.length === 0) {
            return <div>Loading...</div>;
        } 


        return (

            <>
           
                {Locations.map(Location =>
                (<li key={Location.id}><span>{Location.city}</span>{Location.country}</li>
                ))} </>);
    }
}

export default Pays;