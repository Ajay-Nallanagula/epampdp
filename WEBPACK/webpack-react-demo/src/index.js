import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

class HelloWorld extends React.Component {
    render() {
        return (
            <div className='divColor'>
                <h1>Hello, World!</h1>
            </div>
        )
    }
}

ReactDOM.render(<HelloWorld />, document.getElementById('root'));