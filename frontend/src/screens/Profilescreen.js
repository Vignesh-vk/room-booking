import React, { Link, useEffect, useState } from "react";
import { Tabs } from "antd";
const { TabPane } = Tabs;

const user = JSON.parse(localStorage.getItem('currentUser'))
function Profilescreen() {
  return (
    <div className="mt-5 ml-3">
      <Tabs defaultActiveKey="1">
        <TabPane tab="My Profile" key="1">
         <div className="row">
           <div className="col-md-6 bs m-2 p-3">
           <h1>Name : {user.name}</h1>
          <h1>Email : {user.email}</h1>
          <div className='text-right'>
              <a href="/home"><button className='btn btn-primary'>Home</button></a>
              </div>
           </div>
         </div>
        </TabPane>
      </Tabs>
  
    </div>
  );
}

export default Profilescreen;