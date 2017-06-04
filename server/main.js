import { Meteor } from 'meteor/meteor';



Meteor.startup(() => {
  // code to run on server at startup

    import '/imports/api/orders/Orders.js';

    import '/imports/api/orders/server/publications.js';

    import '/imports/api/orders/methods.js';

    import '/imports/api/profiles/methods.js';

    import '/imports/api/profiles/profile.js';


});
