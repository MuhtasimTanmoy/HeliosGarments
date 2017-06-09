import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

class AgentModel extends Mongo.Collection {
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

export const AgentModels = new AgentModels('AgentModels');

AgentModels.schema = new SimpleSchema({
    firstName: { type: String },
    lastName: { type: String },
    phone: {type: Number},
    email: {type: String},
    username: {type: String},
    password: { type: String},
    createdAt: { type: Date },
    createdBy: { type: String },
});
