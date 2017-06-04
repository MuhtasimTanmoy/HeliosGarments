import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';

class LoginForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            error: '',
        };
    }
    change(){
        this.setState({
            error: '',
        });
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
    handleSubmit(event){

        event.preventDefault();
        let username = ReactDOM.findDOMNode(this.refs.username).value.trim();
        let password = ReactDOM.findDOMNode(this.refs.password).value.trim();

        Meteor.loginWithPassword(username, password, (error, result) => {
            if(error){
                console.log(error);
                this.setState({
                    error: "Error: Username and password don't match",
                });
            }
            else{

                    FlowRouter.go('/orderlist');


            }
        });
    }

    render() {
        return (
            <div className='loginSectionCon'>

                <form className="" onSubmit={this.handleSubmit.bind(this)}>
                    <span>Login</span>
                    <div className='logFieldContainer'>
                        Username
                        <input ref="username" type="text" className="loginField" placeholder="Username" onChange={this.change.bind(this)}/>
                        <br/>
                        Password
                        <input ref="password" type="password" className="loginField" placeholder="Password" onChange={this.change.bind(this)}/>
                        <br/>
                        {this.renderError()}
                        <div className='two ui buttons'>
                            <button className="ui blue button newColor">Login</button>
                        </div>
                    </div>
                    <a href="/signup">Create an Account</a>
                </form>

            </div>
        );
    }
}
export default createContainer( (props) => {
    return{
        user: Meteor.user(),
    };
},LoginForm );
