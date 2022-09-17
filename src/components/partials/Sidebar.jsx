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


function Sidebar(props) {
  
  function handleClick(item) {
    // console.log("from Sidebar, item.key is: ", item.key)
    props.setNumBedrooms(item.key)
  }
  
  const bedroomsMenu = (
    <Menu onClick={handleClick}>
      <Menu.Item key='1'>1 bedroom</Menu.Item>
      <Menu.Item key='2'>2 bedrooms</Menu.Item>
      <Menu.Item key='3'>3 bedrooms</Menu.Item>
    </Menu>
  
  );
  const onBudgetSliderAfterChange = (value) => {
    console.log('onBudgetSliderAfterChange: ', value);
  };

    return (
      <div style={{ display: 'flex', height: '100%', overflow: 'scroll initial' }}>
        <CDBSidebar textColor="#fff" backgroundColor="RGB(33 37 41)">
          <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <div>Filters</div>
              
          </CDBSidebarHeader>
  
          <CDBSidebarFooter style={{ textAlign: 'left', padding: '20px 30px'}}>

            {/* <div className="sidebar-btn-wrapper">
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
            </div> */}

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