import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

class AgentReportModel extends Mongo.Collection {
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

export const AgentReportModels = new AgentReportModels('AgentReportModels');

AgentReportModels.schema = new SimpleSchema({
    productType: { type: String },
    productQuantity: { type:Number },
    budget: { type: Number },
    totalPrice:{type:Number},
    completed:{type:Boolean},
    deadline: { type: Date },
    design: { type: String },
    shippingAddress: {type: String },
    specification: {type: String },
    createdAt: { type: Date },
    createdBy: { type: String },
});
