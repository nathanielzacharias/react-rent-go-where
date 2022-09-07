import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

function Sidebar() {
    return (
      <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
        <CDBSidebar textColor="#fff" backgroundColor="#333">
          <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <div>Filter</div>
              
          </CDBSidebarHeader>
  
          <CDBSidebarFooter style={{ textAlign: 'left', padding: '20px 30px'}}>

            <div className="sidebar-btn-wrapper">
              Location
            </div>

            <div className="sidebar-btn-wrapper">
              Budget
            </div>

            <div className="sidebar-btn-wrapper">
              Bedroom
            </div>

          </CDBSidebarFooter>
        </CDBSidebar>
      </div>
    );
  };
  

export default Sidebar;