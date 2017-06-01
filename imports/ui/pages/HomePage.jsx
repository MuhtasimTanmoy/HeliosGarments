import React,{Component} from "react";

import HomePageContent from "../components/HomePageContent"

import SimpleUserLayout from "../layouts/SimpleUserLayout"

export default class HomePage extends Component {
  constructor() {
    super();
  }
  render(){
    return <SimpleUserLayout content={<HomePageContent/>} />
  }
}
