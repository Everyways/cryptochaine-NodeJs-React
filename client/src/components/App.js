import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './../assets/logo.jpg';

class App extends Component {
    state = { walletInfo: { } };

    componentDidMount() {
        fetch(`${document.location.origin}/api/wallet-info`)
        .then(response => response.json())
        .then(json => this.setState({ walletInfo: json}));
    }

    render() {
        const { address, balance } = this.state.walletInfo;

        return (
            <div className='App'>
                <img className='logo' src={logo}></img>
                <br/>
                <div>Bienvenue sur la blockchain...</div>
                <br/>
                <div><Link to='/blocks'>Blocks</Link></div>
                <div><Link to='/conduct-transaction'>Realiser une transaction</Link></div>
                <div><Link to='/transaction-pool'>Voir les transactions</Link></div>
                <br />
                <div className='WalletInfo'>
                    <div>Addresse: {address}</div>
                    <div>Solde: {balance}</div>
                </div>
            </div>
        );
    }
}

export default App;