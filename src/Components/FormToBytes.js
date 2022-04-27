import React, { Component } from 'react';
// import { Form } from 'react-bootstrap';
const ethers = require('ethers');

class FormToBytes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            myString: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.parseBytes = this.parseBytes.bind(this);
    }

    parseBytes(myBytes) {
        let myString = ethers.utils.parseBytes32String(myBytes);
        // bytes = bytes.toString();
        this.setState({
            myString : myString
        });
    }

    handleChange(event) {
        this.setState(
            {
                myString: ''
            }
        )
    }

    handleSubmit(event) {
        event.preventDefault();
        this.parseBytes(event.target.bytes32Input.value);
    }

    render() {
        
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="mb-3">
                    <label for="bytesInput" className="form-label"><b>Bytes32 Input</b></label>
                    <input
                        onChange={this.handleChange}
                        type="text"
                        name="bytes32Input" 
                        className="form-control" 
                        id="bytes32Input" 
                        aria-describedby="bytes32Input"/>
                </div>
                <div className="mb-3">
                    <label for="resultString" className="form-label"><b>String Output</b></label>
                    <input type="text" className="form-control" id="resultString" value={this.state.myString}/>
                </div>
                <button type="submit" className="btn btn-dark">Convert</button>
                {/* <input type="submit" value="Submit" /> */}
            </form>
        )
    }
}

export default FormToBytes;