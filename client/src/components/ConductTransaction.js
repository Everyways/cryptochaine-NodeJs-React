import React, { Component } from 'react';
import { FormGroup, FormControl, Button  } from 'react-bootstrap';
import history from '../history';
import { Link } from 'react-router-dom';

class ConductTransaction extends Component {
    state = {recipient: '', amount: 0};

    updateRecipient = event => {
        this.setState({ recipient: event.target.value} );
    };

    updateAmount = event => {
        this.setState({ amount: Number(event.target.value) });
    };

    ConductTransaction = () => {
        const { recipient, amount } = this.state;

        fetch(`${document.location.origin}/api/transact`, {
            method: 'POST',
            headers: { 'Content-type': 'application/json'},
            body: JSON.stringify({ recipient, amount })
        })
        .then(response => response.json())
        .then(json => {
            alert(json.message || json.type)
            history.push('/transaction-pool');
        });
    };

    render() {
        console.log('this.state', this.state);
        return (
            <div className='ConductTransaction'>
                <Link to='/'>Accueil</Link>
                <h3>Réaliser une transaction</h3>
                <FormGroup>
                    <FormControl 
                    input='text'
                    placeholder='Recipient'
                    value={this.state.recipient}
                    onChange={this.updateRecipient}
                    />
                </FormGroup>
                <FormGroup>
                <FormControl 
                    input='number'
                    placeholder='Montant'
                    value={this.state.amount}
                    onChange={this.updateAmount}
                />
                </FormGroup>
                <Button variant="danger"
                    size="sm"
                    onClick={this.ConductTransaction}
                >
                    Envoyer
                </Button>
            </div>
        )
    }
}

export default ConductTransaction;