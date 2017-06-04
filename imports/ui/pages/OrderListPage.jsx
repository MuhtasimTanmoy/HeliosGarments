import React,{Component} from "react";

import OrderList from "../components/OrderList"

import SimpleUserLayout from "../layouts/SimpleUserLayout"

export default class OrderListPage extends Component {
  constructor() {
    super();
  }
  render(){
    return <SimpleUserLayout content={<OrderList/>} />
  }
}
