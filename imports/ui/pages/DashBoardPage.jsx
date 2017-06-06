import React,{Component} from "react";

import DashBoard from "../components/DashBoard"

import SimpleUserLayout from "../layouts/SimpleUserLayout"

export default class TestPage extends Component {
  constructor() {
    super();
  }
  render(){
    return <SimpleUserLayout content={<DashBoard/>} />
  }
}
