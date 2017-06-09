import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';



export default class SignUpForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            error: '',
        };
    }
    change(event){
        this.setState({
            error: '',
        });
    }

    handleSubmit(event){

        event.preventDefault();
        let data = {
            username: ReactDOM.findDOMNode(this.refs.username).value.trim(),
            password: ReactDOM.findDOMNode(this.refs.password).value.trim(),
            contactNo: ReactDOM.findDOMNode(this.refs.contact).value.trim(),
            address: ReactDOM.findDOMNode(this.refs.address).value.trim(),
        };
        Meteor.call("user.create", data, function(error, result){
            if(error){
                console.log("error", error);
                this.setState({
                    error: error.reason,
                });
            }
            if(result){
                console.log(result);
                //FlowRouter.go('/');
                var x = document.getElementById("snackbar")
                x.className = "show";
                setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);

            }
        }.bind(this));
        ReactDOM.findDOMNode(this.refs.username).value = "";
        ReactDOM.findDOMNode(this.refs.password).value = "";
        ReactDOM.findDOMNode(this.refs.contact).value = "";
        ReactDOM.findDOMNode(this.refs.address).value = "";
    }
    renderError(){
        if(this.state.error != ''){
            return(
                <div className="ui negative message">
                    <div className="header">Errors</div>
                    <p>{this.state.error}</p>
                </div>
            );
        }
    }

    componentDidMount(){
        $('.ui.dropdown')
            .dropdown()
        ;
    }




    render() {
        return (
            <div className='formSectionCon'>

                <div id="snackbar">Success! Customer was successfully added.</div>
                <form className="" onSubmit={this.handleSubmit.bind(this)}>
                    <span>Sign Up</span>
                    <div className='logFieldContainer'>


                        <div className="ui">
                            Username
                            <input ref="username" type="text" className="loginField" placeholder="Username"/>
                            <br/>

                            Password
                            <input ref="password" type="password" className="loginField" placeholder="Password"/>
                            <br/>

                            Contact No
                            <input ref="contact" type="text" className="loginField" placeholder="Contact No"/>
                            <br/>


                            Address
                            <div className="ui form">
                                <div className="field">
                                    <br/>
                                    <textarea ref="address" rows="2"></textarea>
                                </div>
                            </div>

                            {this.renderError()}
                            <div className='two ui buttons'>
                                <button className="ui blue button newColor">Sign Up</button>
                            </div>
                        </div>

                    </div>
                </form>
            </div>
        );
    }
}
