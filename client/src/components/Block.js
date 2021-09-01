import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Transaction from './Transaction';

class Block extends Component {
    state = { displayTransaction: false };

    toggleTransaction = () => {
        this.setState({ displayTransaction: !this.state.displayTransaction });
    };

    get displayTransaction() {
        const { data } = this.props.block;

        const stringifiedData  = JSON.stringify(data);

        const dataDisplay = stringifiedData.length > 35 ?
        `${stringifiedData.substring(0, 35)}...` :
        stringifiedData;

        if (this.state.displayTransaction) {
            return(
                <div>
                        {
                        data.map(transaction => (
                            <div key={transaction.id}>
                                <hr />
                                <Transaction transaction={transaction} />
                            </div>
                        ))
                    }
                    <br />
                    <Button variant="warning"
                        size="sm"
                        onClick={this.toggleTransaction}
                    >
                        Voir moins
                    </Button>
                </div>
            )
        }

        return (
            <div>
                Data: {dataDisplay}
                <Button variant="warning" 
                    size="sm" 
                    onClick={this.toggleTransaction}
                >
                    Voir plus
                </Button>
            </div>
            );
    }

    render() {
        const { timestamp, hash } = this.props.block;

        const hashDisplay = `${hash.substring(0, 15)}...`;

        return(
            <div className='Block'>
                <div>Hash: {hashDisplay}</div>
                <div>Timsetamp: {new Date(timestamp).toLocaleDateString()}</div>
                {this.displayTransaction}
            </div>
        );
    }
};

export default Block;