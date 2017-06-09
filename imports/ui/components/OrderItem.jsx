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
    callComplete(){
      Meteor.call("orders.updateCompletion",this.props.item._id);
    }
      render() {
          return (


            <div className="ui fluid card">
        <div className="content">
        <div className="header ">{this.props.item.productType } - {this.props.item.productQuantity} pieces</div>
        <div className="ui divider"></div>

        {this.props.item.productType=="Pant" && <img src="assets/pant.png" width="140" height="140" className="left floated"/>}
        {this.props.item.productType=="Shirt" && <img src="assets/shirt.jpg" width="140" height="140" className="left floated"/>}

        {this.props.item.productType=="Tshirt" && <img src="assets/t-shirt.png" width="140" height="140" className="left floated"/>}

         {this.props.item.productType=="Accessories" && <img src="assets/HeaderLogo.png" width="140" height="140" className="left floated"/>}
        <div className="floated right container">

        <p className="fieldName">Shipping Address : {this.props.item.shippingAddress}</p>
        <p className="fieldName">Total cost : {this.props.item.totalPrice}</p>

        <p className="fieldName">Specification : {this.props.item.specification}</p>
        <p className="fieldName">Expected delivery date : {this.props.item.deadline}</p>


          <div className="ui four steps">
    <div className="active step">
      <i className="clone icon"></i>
      <div className="content">
        <div className="title">Order Placed</div>
      </div>
    </div>
    <div className="disabled step">
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


       <button className="right floated ui basic red button" onClick={this.call.bind(this)}>
        {this.props.item.completed==false && <text>Cancel</text>}
        {this.props.item.completed==true && <text>Delete</text>}
        </button>
      {this.props.item.completed==false && <button className="right floated ui light blue button" onClick={this.callComplete.bind(this)}>
        Mark as completed
      </button>}


        <p >Order received on : {this.props.item.createdAt.toLocaleDateString('en-GB')}</p>



        </div>
        </div>




          );
      }

  }
