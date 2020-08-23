import React from 'react';
import './App.css';
import MainContainer from "./components/main/mainContainer";
import Hello from "./components/hello";

class App extends React.Component {
    render() {
        return (
            <main>
                <Hello />
                <div class='container'>
                    <MainContainer/>
                </div>
            </main>
        )
    }
}

export default App;
