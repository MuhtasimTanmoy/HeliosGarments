import React, {Component} from 'react';


export default class SimpleUserLayout extends Component {


    render() {
        return (
        	<div>

		        <div className="content">
		            {this.props.content}
		        </div>
	        </div>
        );
    }
}
