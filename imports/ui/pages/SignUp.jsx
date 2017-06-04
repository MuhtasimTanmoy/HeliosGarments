import React,{Component} from "react";

import SignUpForm from "../components/SignUpForm"

import SimpleUserLayout from "../layouts/SimpleUserLayout"

export default class SignUp extends Component {
  constructor() {
    super();
  }
  render(){
    return <SimpleUserLayout content={<SignUpForm/>} />
  }
}
