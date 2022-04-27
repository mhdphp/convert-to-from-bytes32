import React, { Component } from 'react';
// import { Form } from 'react-bootstrap';
const ethers = require('ethers');

class FormToString extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bytes: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.createBytes32 = this.createBytes32.bind(this);
    }

    // convert string to bytes32
    createBytes32(myString) {
        let bytes = ethers.utils.formatBytes32String(myString).toString();
        // bytes = bytes.toString();
        this.setState({
            bytes : bytes
        });
    }

    // clear the output input field
    handleChange(event) {
        this.setState(
            {
                bytes: ''
            }
        )
    }

    // take the string from input filed and use it as parameter for createBytes32 func
    handleSubmit(event) {
        event.preventDefault();
        this.createBytes32(event.target.stringInput.value);
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="mb-3">
                    <label for="stringInput" className="form-label"><b>String Input</b></label>
                    <input
                        onChange={this.handleChange}
                        type="text"
                        name="stringInput" 
                        className="form-control" 
                        id="stringInput" 
                        aria-describedby="stringInput"/>
                </div>
                <div className="mb-3">
                    <label for="resultBytes32" className="form-label"><b>Bytes32 Output</b></label>
                    <input type="text" className="form-control" id="resultBytes32" value={this.state.bytes}/>
                </div>
                <button type="submit" className="btn btn-dark">Convert</button>
                {/* <input type="submit" value="Submit" /> */}
            </form>
        )
    }
}

export default FormToString;