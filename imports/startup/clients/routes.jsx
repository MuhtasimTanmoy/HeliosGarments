import React from "react";
import {mount} from "react-mounter";

import HomePage from "/imports/ui/pages/HomePage"
import SignUp from "/imports/ui/pages/SignUp"
import SignInPage from "/imports/ui/pages/SignInPage"
import OrderListPage from "/imports/ui/pages/OrderListPage"
import Test from "/imports/ui/pages/TestPage"
import DashBoardPage from "/imports/ui/pages/DashBoardPage"
import CompletedOrderListPage from "/imports/ui/pages/CompletedOrderListPage"



import InsertOrderPage from "/imports/ui/pages/InsertOrderPage"

// import {Main} from "/imports/ui/layouts/main"
// import HomePage from "/imports/ui/components/HomePage"

// FlowRouter.route('/',{
//   action(){
//     mount(Main,{
//       content:(<HomePage/>)
//     })
//   }
// }
// )

FlowRouter.route('/', {
    name: 'Home',
    action(params, queryParams) {
        mount(HomePage);
    }
});

FlowRouter.route('/completedOrder', {
    name: 'completedOrder',
    action(params, queryParams) {
        mount(CompletedOrderListPage);
    }
});
FlowRouter.route('/test', {
    name: 'Home',
    action(params, queryParams) {
        mount(Test);
    }
});


FlowRouter.route('/dashboard', {
    name: 'DashBoard',
    action(params, queryParams) {
        mount(DashBoardPage);
    }
});



FlowRouter.route('/signup', {
    name: 'Signup',
    action(params, queryParams) {
        mount(SignUp);
    }
});

FlowRouter.route('/login', {
    name: 'Signup',
    action(params, queryParams) {
        mount(SignInPage);
    }
});

FlowRouter.route('/orderlist', {
    name: 'Order',
    action(params, queryParams) {
        mount(OrderListPage);
    }
});

FlowRouter.route('/dashboard', {
    name: 'Home',
    action(params, queryParams) {
        mount(OrderListPage);
    }
});

FlowRouter.route('/insertorder', {
    name: 'order',
    action(params, queryParams) {
        mount(InsertOrderPage);
    }
});
