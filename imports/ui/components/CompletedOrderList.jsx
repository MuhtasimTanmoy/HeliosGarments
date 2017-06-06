import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Orders} from '/imports/api/orders/Orders.js';
import OrderItem from './OrderItem';



class  OrderList extends Component {
  constructor() {
    super();
  }


  renderOrders(){
    let waiting= <div className="ui segment">
  <div className="ui active inverted dimmer">
    <div className="ui text loader">Loading</div>
  </div>
  <p></p>
</div>;


    let aWait=<div className="ui fluid segment">
<div className="ui active dimmer">
<div className="ui indeterminate text loader">Preparing Files</div>
</div>
<p>Hello</p>
</div>;

    let sts = this.props.orders;
    let array = [];
    if(sts.length != 0){
      console.log(this.props.orders);
        for( var i in sts){
      			array.push(<OrderItem key={i} item={sts[i]} />);
      		}
    }else{
      console.log("nothing");
      array= waiting;
    }
      return array;
  }




  render(){

    return(
      <div className="ui container paddingTopForHeader center aligned">


          <div className="ui black inverted segment"><div className="customFont">List of completed orders</div></div>


          {this.renderOrders()}


</div>

  );

  }
}


export default createContainer(  (props) => {
    Meteor.subscribe('orders');

    return{
        orders: Orders.find({createdBy:Meteor.user()._id,completed:true}).fetch(),
        user: Meteor.user(),
    };
}, OrderList);
