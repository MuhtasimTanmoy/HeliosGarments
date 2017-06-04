import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';


Meteor.methods({
    'user.create'(data){
        console.log(data);
        check(data,UserSchema);

        let userid = Accounts.createUser({
            username: data.username,
            password: data.password,
            profile:{
                contactNo: data.contactNo,
                address: data.address,
            }
        });

        return { status: 1, };
    },
    'user.update'( data ){
        Meteor.users.update({_id: this.userId},
            {$set:
                {
                    'username': data.username,
                    'profile.contactNo': data.contactNo,
                    'profile.address': data.address,
                }
            }
        );
        return {
            statusCode: 1,
        }
    },
})
