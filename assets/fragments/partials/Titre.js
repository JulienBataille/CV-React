import React from "react";

class Titre extends React.Component {
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
            <p key={metier.id}>{ metier.title }</p>
        ))} 
        
        </>);
}
}

export default Titre;