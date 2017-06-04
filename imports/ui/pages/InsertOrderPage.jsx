import React,{Component} from "react";

import InsertOrderForm from "../components/InsertOrderForm"

import SimpleUserLayout from "../layouts/SimpleUserLayout"

export default class SignUp extends Component {
  constructor() {
    super();
  }
  render(){
    return <SimpleUserLayout content={<InsertOrderForm/>} />
  }
}
