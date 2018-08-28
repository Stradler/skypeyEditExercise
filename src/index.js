import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import store from "./store";
import registerServiceWorker from './registerServiceWorker';

function fancyLog(){
    console.log("%c rendered with 👉 👉👇", "background: purple; color: #FFF");
    console.log(store.getState());
}

const render = () => {
    fancyLog();
    return ReactDOM.render(<App />, document.getElementById('root'));
}

render();

store.subscribe(render);

registerServiceWorker();


