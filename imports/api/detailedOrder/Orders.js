import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

class DetailedOrdersCollection extends Mongo.Collection {
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

export const DetailedOrder = new DetailedOrdersCollection('DetailedOrder');

DetailedOrder.schema = new SimpleSchema({
    _id: { type: String },
    current_state:{type :String},
	progress:{type :Number},
	expected_finish_data:{type:Date},
	timeToBeExtendedOnFailure:{type:Number},
	currentEmployeeDeployed:{type:Number},
	progressByThisWeek:{type:Number},
	progressByThisMonth:{type:Number},
	

    createdAt: { type: Date },
    createdBy: { type: String },
});
