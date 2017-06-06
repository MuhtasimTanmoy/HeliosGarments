import React,{Component} from "react";

import CompletedOrderList from "../components/CompletedOrderList"

import SimpleUserLayout from "../layouts/SimpleUserLayout"

export default class OrderListPage extends Component {
  constructor() {
    super();
  }
  render(){
    return <SimpleUserLayout content={<CompletedOrderList/>} />
  }
}
