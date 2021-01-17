import React from 'react';
import '../App.css';

function Profile(props) {
    return (
        <div className="App">
            <header className="App-header">
                <div>
                    Profile and dashboard with points, histry adn everything
                </div>
                <div>
                    <a className="App-link"
                        onClick={props.playQuize}
                    >
                       Play Quize
                    </a>
                </div>
                <div>
                    <button onClick={props.startQuize}>Get single quize</button>
                    <button onClick={props.submitAnswer}>Submt answer</button>
                </div>
                <a
                    className="App-link"
                    onClick={props.onClick}
                >
                    Logout
                </a>
            </header>
        </div>
    );
}

export default Profile;