// import React from "react";
// import { render } from "react-dom";

// import { User } from './components/User';
// import { Main } from './components/Main';

// class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             username: "Khaja"
//         };
//     }

//     changeUsername(newName) {
//         this.setState({
//             username: newName
//         });
//     }

//     render() {
//         return (
//             <div className="container">
//                 <Main changeUsername={this.changeUsername.bind(this)} />
//                 <User username={this.state.username} />
//             </div>
//         );
//     }
// }

// render(<App />, window.document.getElementById('app'));

import { createStore } from 'redux';

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            state = state + action.payload;
            break;
        case "SUBTRACT":
            state = state - action.payload;
            break;
    }

    return state;
}

/** The first parameter accepts a reducer function
 * The second parameter is the initial state which could be an array or object. 
 * For simplicity we are considering an integer value.
 */
const store = createStore(reducer, 1);

store.subscribe(() => {
    console.log("Store Updates ", store.getState());
})

store.dispatch({
    type: "ADD",
    payload: 10
})

store.dispatch({
    type: "SUBTRACT",
    payload: 20
})