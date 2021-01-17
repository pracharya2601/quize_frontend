import React from 'react';
import '../App.css';

function Home(props) {
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    You are not logged in
                </p>
                <button
                    className="App-link"
                    onClick={props.signIn}
                >
                    Login Here
                </button>
                <button
                    className="App-link"
                    onClick={props.signUp}
                >
                    Signup Here
                </button>
            </header>
        </div>
    );
}

export default Home;