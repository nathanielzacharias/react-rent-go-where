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

import { Slider } from 'antd';


function Sidebar() {

  
  const onBudgetSliderAfterChange = (value) => {
    console.log('onBudgetSliderAfterChange: ', value);
  };



    return (
      <div style={{ display: 'flex', height: '100%', overflow: 'scroll initial' }}>
        <CDBSidebar textColor="#fff" backgroundColor="RGB(33 37 41)">
          <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <div>Filter</div>
              
          </CDBSidebarHeader>
  
          <CDBSidebarFooter style={{ textAlign: 'left', padding: '20px 30px'}}>

            <div className="sidebar-btn-wrapper">
              <p>
                Location
              </p>
            </div>

            <div className="sidebar-btn-wrapper">
              <p>
                Budget
              </p>

              <Slider
                range
                step={10}
                tooltip={{ open: true }}
                defaultValue={[600, 1000]}
                onAfterChange={onBudgetSliderAfterChange}
              />
            </div>

            <div className="sidebar-btn-wrapper">
              <p>
                Bedroom
              </p>
            </div>

          </CDBSidebarFooter>
        </CDBSidebar>
      </div>
    );
  };
  

export default Sidebar;