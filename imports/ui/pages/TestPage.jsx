import React,{Component} from "react";

import Test from "../components/test"

import SimpleUserLayout from "../layouts/SimpleUserLayout"

export default class TestPage extends Component {
  constructor() {
    super();
  }
  render(){
    return <SimpleUserLayout content={<Test/>} />
  }
}
