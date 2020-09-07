import React, {Component} from 'react';
import Request from '../lib/request';

const request = new Request();

class Form extends Component  {

    state = {
        id: '',
        step: '',
        balance: '',
    };

    constructor() {
        super();

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
    }

    handleChange(event) {

        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.sendValue();
    }

    sendValue = () => {
        let {id, step, balance} = this.state;

        const data = {
            invoiceParams: {
                type: 1,
                release: true,
                pendingRelease: true,
                overdue: true,
                paymentReceived: false
            },
            balance: parseFloat(balance),
            step: Number(step),
        }

        request.patchUser(id, {data})
            .then(response => {

                if(typeof response === "string"){
                    const message = 'Atencão - ' + response;
                    alert(message);
                }else {
                    alert('Sucesso');
                }

                console.log(response);
            })
            .catch(error =>{
                alert('Erro - ' + error);
                console.log(error);
            });
    }

    render(){
        let { id, step, balance }= this.state;

        return (
            <div>
                <h1>Editar</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        id:
                        <br/>
                        <input name= "id" type="text" value={id} onChange={this.handleChange} />
                        <br/>
                        <br/>
                        step:
                        <br/>
                        <input name="step" type="text" value={step} onChange={this.handleChange} />
                        <br/>
                        <br/>
                        balence:
                        <br/>
                        <input  name="balance" type="text" value={balance} onChange={this.handleChange} />
                        <br/>
                        <br/>
                    </label>
                    <input type="submit" value="Enviar" />
                </form>
            </div>
        );
    }
}

export default Form;