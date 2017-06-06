import React,{Component} from "react";
import {createContainer} from 'meteor/react-meteor-data';

class Header extends Component {

  componentDidMount() {
	    $('.ui.basic.button')
	            .popup({
	                inline: true
	            })
	            ;
	    $('.ui.label')
	            .popup({
	                inline: true
	            })
	            ;
	    $('.ui.dropdown')
	            .dropdown()
	            ;
	}
  constructor() {
    super();
  }
  logOut(){
        Meteor.logout();
        FlowRouter.go('/login');

    }
  render(){
    console.log(this.props.user);
    return (

      <div className="ui black inverted large top fixed menu">

  				<a href="/" className="header item">
  					<img className="logo" src="assets/HeaderLogo.png"/>

  					Helios
  				</a>

  				<div className="right menu">
  					{this.props.user==null && <a className="item" href="/login">Login</a>}
            {this.props.user!=null && <a className="item" href="/dashboard">Dashboard</a>}

  					<div className="ui pointing dropdown item">
  						<i className="user icon"></i> My Account <i className="dropdown icon"></i>
  						<div className="menu">
  							<a className="item" href="#">My profile</a>
  							<a className="item" href="/login">Edit profile</a>
  							<a className="item" onClick={this.logOut}>Logout</a>
  						</div>
  					</div>
  					<span className="item"></span>
  				</div>
  			</div>
    )
  }
}

export default createContainer(  (props) => {

    return{

        user: Meteor.user(),
    };
}, Header);
