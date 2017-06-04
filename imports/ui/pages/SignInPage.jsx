import React,{Component} from "react";

import SignInForm from "../components/SignInForm.jsx"

import SimpleUserLayout from "../layouts/SimpleUserLayout"

export default class SignUp extends Component {
  constructor() {
    super();
  }
  render(){
    return <SimpleUserLayout content={<SignInForm/>} />
  }
}
