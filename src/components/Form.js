import React from 'react';
import * as axios from "axios";

const config = {
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
};

const Form = (props) => {
    const { documentId }= props.match.params;
    console.log(props.match.params);

    axios.get('/',config).then( res => console.log(">>>>asquiii.",res));
    return (
        <div>
            <h1>Aqui será o formulário</h1>
            {documentId}
            <p>About US page body content</p>
        </div>
    );
}

export default Form;