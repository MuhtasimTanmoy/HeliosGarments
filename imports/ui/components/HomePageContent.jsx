import React,{Component} from "react";
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

export default class  HomePageContent extends Component {
  constructor() {
    super();
  }

  add(event){
    event.preventDefault();
    let data = {
          productType: ReactDOM.findDOMNode(this.refs.productType).value.trim(),

      };

      //console.log(data.productType);

      Meteor.call("orders.insert", data , function(error, result){
              if(error){

                  console.log("dsdsdsdf")
              }
              if(result){

                  console.log("yes")

                  // if(result.statusCode==1){
                  //     // Materialize.toast('Status was successfully submitted!', 3000,'added');
                  //   console.log(result);
                  // }
              }
          }.bind(this));

  };

  render(){




    return (
      <div className='loginSectionCon'>

                <form >
                    <span>Login</span>
                    <div className='logFieldContainer'>
                        Username
                        <input ref="username" type="text" className="loginField" placeholder="Username"/>
                        <br/>
                        Password
                        <input ref="password" type="password" className="loginField" placeholder="Password" />
                        <br/>
                    
                        <div className='two ui buttons'>
                            <button className="ui blue button newColor">Login</button>
                        </div>
                    </div>
                    <a href="/signup">Create an Account</a>
                </form>

            </div>
    )
  }
}
