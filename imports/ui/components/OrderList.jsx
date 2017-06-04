import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Orders} from '/imports/api/orders/Orders.js';


class  OrderList extends Component {
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
      return <div className="item">Hello</div>
  }




  render(){
    if(this.props.orders.length != 0){
      console.log(this.props.orders);
    }else{
      console.log("nothing");
    }
    return(
      <div className="paddingTopForHeader ui grid">

      </div>

  );

  }
}


export default createContainer(  (props) => {
    Meteor.subscribe('orders');
    return{
        orders: Orders.find({}).fetch(),
        user: Meteor.user(),
    };
}, OrderList);
