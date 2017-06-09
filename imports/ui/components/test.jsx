
  import React, {Component} from 'react';


  export default class SingleOrder extends Component {

      render() {
          return (

                            <div className="ui container paddingTopForHeader ">

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



                      <div className="ui four steps">
                <div className=" step">
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


              <div className="ui four steps">
        <div className=" step">
          <i className="clone icon"></i>
          <div className="content">
            <div className="title">Order Placed</div>
          </div>
        </div>
        <div className="step">
          <i className="checkmark box icon"></i>
          <div className="content">
            <div className="title">Order Confirmed</div>
          </div>
        </div>
        <div className="active step">
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


      <div className="ui four steps">
<div className=" step">
  <i className="clone icon"></i>
  <div className="content">
    <div className="title">Order Placed</div>
  </div>
</div>
<div className="step">
  <i className="checkmark box icon"></i>
  <div className="content">
    <div className="title">Order Confirmed</div>
  </div>
</div>
<div className="step">
  <i className="money icon"></i>
  <div className="content">
    <div className="title">Payment Done</div>
  </div>
</div>
<div className="active step">
  <i className="truck icon"></i>
  <div className="content">
    <div className="title">Shipping</div>
  </div>
</div>
</div>







                              </div>
          );
      }

  }
