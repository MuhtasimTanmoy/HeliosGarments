import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import React, {Component} from 'react';


export default class StatusInsertForm extends Component {

    constructor(props) {
      super(props);

      this.state = {
          type: '0',
          error: '',
          loading: false,
      };
    }
    change(event){
        this.setState({
          type: event.target.value,
		  error: '',
        });
    }

    handleSubmit(event){

        event.preventDefault();
        let data = {
            productType: this.state.type,
            productQuantity : ReactDOM.findDOMNode(this.refs.quantity).value.trim(),
            budget : ReactDOM.findDOMNode(this.refs.budget).value.trim(),
            deadline : ReactDOM.findDOMNode(this.refs.deadline).value.trim(),
            specification : ReactDOM.findDOMNode(this.refs.specification).value.trim(),
            shippingAddress : ReactDOM.findDOMNode(this.refs.shippingAddress).value.trim(),
        };

        console.log(data);

            Meteor.call("orders.insert", data , function(error, result){
                if(error){
                    console.log("error", error);
                    this.setState({
                        error: error.reason,
                    });
                }
                if(result){
                    console.log(result);
                    if(result.statusCode==1){
                        // Materialize.toast('Status was successfully submitted!', 3000,'added');
                        var x = document.getElementById("snackbar")
                        x.className = "show";
                        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
                    }
                }
            }.bind(this));

        productQuantity = ReactDOM.findDOMNode(this.refs.quantity).value = "";
        budget = ReactDOM.findDOMNode(this.refs.budget).value = "";
        deadline = ReactDOM.findDOMNode(this.refs.deadline).value = "";
        specification = ReactDOM.findDOMNode(this.refs.specification).value = "";
        shippingAddress = ReactDOM.findDOMNode(this.refs.shippingAddress).value = "";
        total=ReactDOM.findDOMNode(this.refs.total).value="";

    }


	renderError(){
			if(this.state.error != ''){
				return(
					<div className="ui negative message">
					  <div className="header">Errors</div>
					  <p>{this.state.error}</p>
					</div>
				);
		}
	}

    componentDidMount(){
        $('.ui.dropdown')
          .dropdown()
        ;
    }

    checkit(){
      let budgetPerPiece=ReactDOM.findDOMNode(this.refs.budget).value.trim();
      let quantity=ReactDOM.findDOMNode(this.refs.quantity).value.trim();

      ReactDOM.findDOMNode(this.refs.total).value=budgetPerPiece*quantity;

    }




    render() {
        return (
            <div className='formSectionCon'>
                <div id="snackbar">Success! Status was successfully added.</div>


                <form className="" onSubmit={this.handleSubmit.bind(this)}>
                    <span>Submit Order</span>
                    <div className='logFieldContainer'>
                        Select Traffic jam level
                        <div className="ui">
                            <select className="ui dropdown loginField" onChange={this.change.bind(this)}>
                                <option value="">Select Type</option>
                                <option value="Shirt">Shirt</option>
                                <option value="Pant">Pant</option>
                                <option value="Tshirt">T-Shirt</option>
                                <option value="Accessories">Accessories</option>

                            </select>

                            Quantity
                            <input ref="quantity" type="number" className='loginField'/>

                            Budget
                            <input ref="budget" type="number" className='loginField' onChange={this.checkit.bind(this)}/>
                            Total
                            <input ref="total" type="number" className='loginField'/>

                              Deadline
                              <input ref="deadline" type="date" className='loginField'/>

                          ShippingAddress
                            <textarea id="mytextarea" className="loginField" ref="shippingAddress" placeholder="Address"
                                      type="text" rows="5"></textarea>

                                    specification
                                      <input ref="specification" type="text" className='loginField'/>
                            <br/>



                             {this.renderError()}
                            <div className='two ui buttons'>
                                <button className="ui blue button newColor">Submit</button>
                            </div>
                        </div>

                    </div>
                </form>

            </div>
        );
    }
}
