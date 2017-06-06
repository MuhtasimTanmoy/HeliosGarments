import React, {Component} from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';


export default class SimpleUserLayout extends Component {


    render() {
        return (
        	<div>


            <Header/>

		        <div className="pusher">
		            {this.props.content}
		        </div>

            <Footer/>


	        </div>
        );
    }
}
