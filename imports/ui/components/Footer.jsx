import React, {Component} from 'react';


export default class Footer extends Component {


    render() {
        return (
            <div className="ui inverted vertical footer segment">
                <div className="ui container fluid">
                    <div className="ui grid">
                        <div className="eight wide column">
                            <p>
                                Copyright © 2017 Helios Garments All Rights Reserved.<br />
                                A group project by Ajoy(1405079),Azamin(1405075),Farabee(1405072),Mimon(1405087),Tanmoy(1405086).
                            </p>
                        </div>
                        <div className="eight wide column">
                            <div className="ui horizontal inverted right floated small divided link list">
                                <a className="item" href="#">Contact Us</a>
                                <a className="item" href="#">Terms and Conditions</a>
                                <a className="item" href="#">Privacy Policy</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
