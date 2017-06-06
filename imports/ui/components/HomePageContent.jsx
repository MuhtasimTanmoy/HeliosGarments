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
  int(){
    <img className="ui  image" src="assets/Hlogo.png">
    <div className="ui segment">Hello Center</div>
  </img>
  }

  render(){




    return (
      <div className='ui paddingTopForHeader container '>
        <div className="ui paddingForImage">
        <img className="ui image" src="assets/Hlogo.png">
      </img>



      </div>

</div>






    )
  }
}
