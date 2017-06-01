import React from "react";
import {mount} from "react-mounter";

import {Main} from "/imports/ui/layouts/main"
import HomePage from "/imports/ui/components/HomePage"

FlowRouter.route('/',{
  action(){
    mount(Main,{
      content:(<HomePage/>)
    })
  }
}
)
