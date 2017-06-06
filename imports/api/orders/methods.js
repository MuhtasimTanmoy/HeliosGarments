import {
    Meteor
} from 'meteor/meteor';
import {
    Mongo
} from 'meteor/mongo';
import {
    Orders
} from './Orders.js';

Meteor.methods({

    'orders.insert' (data) {

        // if (!this.userId) {
        //     throw new Meteor.Error('not-authorized');
        // }
        console.log("Hello");
        console.log(data);

        //let usr = Meteor.user();
        let ret = Orders.insert({

            productType: data.productType,
            productQuantity: data.productQuantity,
            budget: data.budget,
            // totalPrice: data.totalPrice,
            deadline: data.deadline,
            // design: data.design,
            shippingAddress: data.shippingAddress,
            specification: data.specification,


        });;
        return {
            statusCode: 1,
            statusId: ret,
        }

    },

    'orders.update' (data) {
        console.log(data);

        if (Meteor.user() != null) {

            Orders.update(data.id, {
                $set: {
                    productType: data.productType,
                    productQuantity: data.peoductQuantity,
                    budget: data.budget,
                    totalPrice: data.totalPrice,
                    deadline: data.deadline,
                    design: data.design,
                    shippingAddress: data.shippingAddress,
                    specification: data.specification,
                },
            });
        } else {
            throw new Meteor.Error('not-authorized');
        }
        return {
            statusCode: 1,
        }
    },
    'orders.delete' (id) {

        if (Meteor.user() == null) {
            Orders.remove(id);
        } else {
            throw new Meteor.Error('not-authorized');
        }
        return {
            statusCode: 1,
        }

    },
    'single.status' (id) {
        let status = Orders.findOne(id);
        return status;
    },

    'findAll' (data){
      return {
        s: Orders.find({}).fetch(),
      }
    },







});
