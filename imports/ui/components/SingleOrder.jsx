import React, {Component} from 'react';


export default class SingleOrder extends Component {

    render() {
        return (
            <div className="item">
                <div className="content">
                    <a className="header text">{this.props.item.level}</a>
                    <p>{this.props.item.createdAt.toLocaleDateString()+" "+this.props.item.createdAt.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
                    <div className="extra">
                        <a className="ui small label"><i className="hourglass half icon"></i>{moment(this.props.item.createdAt).fromNow()}</a>
                        <a className="ui small red label"><i className="warning icon icon"></i> Red Alert</a>
                    </div>
                    <div className="description">
                        <p>
                            <span className="location"><i className="marker icon"></i>{this.props.item.address}</span>
                        </p>
                    </div>
                    <div className="meta">
                        <span className="condition">{this.props.item.note}</span>
                    </div>
                </div>
            </div>
        );
    }

}
