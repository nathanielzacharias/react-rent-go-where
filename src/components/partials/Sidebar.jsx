import React, {useState} from 'react';
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
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';

const bedroomsMenu = (
  <Menu
    items={[
      {
        label: '1 bedroom',
        key: '1',
      },
      {
        label: '2 bedrooms',
        key: '2',
      },
      {
        label: '3 bedrooms',
        key: '3',
      },
      {
        label: '4 bedrooms',
        key: '4',
      },
      {
        label: '5 bedrooms',
        key: '5',
      },
      {
        label: '6 or more bedrooms',
        key: '6',
      },
    ]}
  />
);



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
              <Dropdown.Button type="secondary"  overlay={bedroomsMenu}>
                Bedrooms
              </Dropdown.Button>
            </div>

          </CDBSidebarFooter>
        </CDBSidebar>
      </div>
    );
  };
  

export default Sidebar;