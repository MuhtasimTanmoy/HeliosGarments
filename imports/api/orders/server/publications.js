import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import {Orders} from '../Orders.js';

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('orders', function () {
    return Orders.find({});
  });
}