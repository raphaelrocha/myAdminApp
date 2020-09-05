import React, {Component} from 'react';
import * as axios from "axios";

const config = {
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
};

class Form extends Component  {

    state = {
        counter: 0,
        documentId: '',
        fromServer: 'Ainda não bateu no servidor'
    };

    componentDidMount() {
        const { documentId }= this.props.match.params;
        this.setState({documentId});
        this.getFormServer()
    }

    getFormServer = () => {
        let { counter } = this.state;
        counter = counter + 1;
        axios.get('/',config).then( res => {
            console.log(">>>>asquiii.", counter);
            this.setState({fromServer: 'EU!!!',counter})
        });
    }

    render(){
        const { documentId, fromServer, counter }= this.state;

        return (
            <div>
                <h1>Aqui será o formulário</h1>
                {documentId}
                <br/>
                {fromServer}
                <br/>
                contador {counter}
                <p>About US page body content</p>
            </div>
        );
    }
}

export default Form;