  import React, {Component} from 'react';


  export default class OrderItem extends Component {

    int(){



  <div className="ui black segment" >
    <div className="customFontWhite">
      {this.props.item.productType   }
    </div>
  </div>

    }


    call(){
      Meteor.call("orders.delete",this.props.item._id);
    }
      render() {
          return (


            <div className="ui fluid card">
        <div className="content">
        <div className="header ">{this.props.item.productType } - {this.props.item.productQuantity} pieces</div>
        <div className="ui divider"></div>

        <img src="assets/HeaderLogo.png" width="140" height="140" className="left floated"/>
        <div className="floated right container">

        <p className="fieldName">Shipping Address : {this.props.item.shippingAddress}</p>

        <p className="fieldName">Specification : {this.props.item.specification}</p>
        <p className="fieldName">Expected delivery date : {this.props.item.deadline}</p>


          <div className="ui four steps">
    <div className="step">
      <i className="clone icon"></i>
      <div className="content">
        <div className="title">Order Placed</div>
      </div>
    </div>
    <div className="active step">
      <i className="checkmark box icon"></i>
      <div className="content">
        <div className="title">Order Confirmed</div>
      </div>
    </div>
    <div className="disabled step">
      <i className="money icon"></i>
      <div className="content">
        <div className="title">Payment Done</div>
      </div>
    </div>
    <div className="disabled step">
      <i className="truck icon"></i>
      <div className="content">
        <div className="title">Shipping</div>
      </div>
    </div>
  </div>
        </div>
        </div>
        <div className="extra content">


        <button className="right floated ui blue button" onClick={this.call.bind(this)}>
        Delete
        </button>

        <p >Order received on : {this.props.item.createdAt.toLocaleDateString('en-GB')}</p>



        </div>
        </div>




          );
      }

  }
