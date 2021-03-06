import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Orders} from '/imports/api/orders/Orders.js';
import OrderItem from './OrderItem';



class  DetailedOrderModel extends Component {
  constructor() {
    super();
  }

  int(){
    let p;
    Meteor.call("findAll", {} , function(error, result){
                    if(error){
                        console.log("error", error);
                        this.setState({
                            error: error.reason,
                        });
                    }
                    if(result){
                        console.log(result);
                        p=result.s;
                        console.log(p);


                    }
                });
    console.log(this.props.orders);
    console.log(p);
  }
  renderOrders(){
    let waiting= <div className="ui segment">
  <div className="ui grey segment">
    <div className="ui text"><p className="customText">No orders found</p></div>
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


          <div className="ui black inverted segment"><div className="customFont">List of current orders</div></div>


          {this.renderOrders()}


</div>

  );

  }
}


export default createContainer(  (props) => {
    Meteor.subscribe('orders');

    return{
        orders: Orders.find({createdBy:Meteor.user()._id,completed:false}).fetch(),
        user: Meteor.user(),
    };
}, OrderList);
