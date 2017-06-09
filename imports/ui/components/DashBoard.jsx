
import React, {Component} from 'react';


export default class DashBoard extends Component {

    render() {
        return (

                          <div className="ui container paddingTopForHeader three cards">
                            <a className="green colored card"  href="/insertorder">
                                <div className="image iconHolder">
                                    <h2 className="ui center aligned icon header">
                                        <i className="circular inverted green add to calander icon"></i>
                                        <h3>Place New Order</h3>
                                    </h2>
                                </div>

                            </a>

                            <a className="blue colored card"  href="/orderlist">
                                <div className="image iconHolder">
                                    <h2 className="ui center aligned icon header">
                                        <i className="circular inverted blue list layout icon"></i>
                                        <h3>My Orders</h3>
                                    </h2>
                                </div>

                            </a>

                            <a className="teal colored card"  href="/completedOrder">
                                <div className="image iconHolder">
                                    <h2 className="ui center aligned icon header">
                                        <i className="circular inverted teal history icon"></i>
                                        <h3>Order History</h3>
                                    </h2>
                                </div>

                            </a>

                            </div>
        );
    }

}
