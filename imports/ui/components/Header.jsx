import React,{Component} from "react";

export default class Header extends Component {

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
  render(){
    return (
      <div className="ui black inverted large top fixed menu">
  				<a className="toc item">
  					<i className="sidebar icon"></i>
  				</a>
  				<a href="index.html" className="header item">
  					<img className="logo" src="assets/images/logo.png"/>
           
  					Helios
  				</a>

  				<div className="right menu">
  					<a className="item" href="#">Help</a>

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
