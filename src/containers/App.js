import React, {Component} from 'react';
import Header from "../components/Header";
import Input from "../components/Input";
import Image from "../components/Image";
import SyncLoader from "react-spinners/SyncLoader";
import './App.css';
const deepai = require('deepai');

deepai.setApiKey('YOUR API KEY HERE');


class App extends Component {
    constructor() {
        super();
        this.state = {
            input: '',
            output: '',
            loading: false
        }
        this.onButtonSubmit = this.onButtonSubmit.bind(this)
    }

    onInputChange = (event) => {
        this.setState({input: event.target.value});
    }

    async onButtonSubmit() {
        try {
            this.setState({loading: true});
            let resp = await deepai.callStandardApi("colorizer", {
                image: this.state.input,
            });
            this.setState({loading: false});
            this.setState( {output: resp.output_url});
        } catch (error) {
            alert("Please enter a valid link!");
            this.setState({loading: false});
        }
    }


    render() {
        return(
            <div>
                <Header/>
                <Input onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
                <div className="sweet-loading loading">
                    <SyncLoader size={20} color={"#ffd664"} loading={this.state.loading}/>
                </div>
                <Image output={this.state.output}/>
            </div>
        )
    }
}

export default App;
