import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

class ClientCollection extends Mongo.Collection {
    insert(doc, callback) {

        let now = new Date();

        doc.createdAt = now;
        doc.createdBy = Meteor.userId();

        return super.insert(doc, callback);
    }

    update(selector, modifier) {
        return super.update(selector, modifier);
    }

    remove(selector) {
        return super.remove(selector);
    }
}

export const Clients = new ClientCollection('Clients');

Clients.schema = new SimpleSchema({
    username: { type: String },
    password: { type:String },
    contact_no: { type: Number },
    address:{ type:String },
});
