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

function setBedroomsInApp (e, setNumBedrooms) {
  e.preventDefault()
  setNumBedrooms(e.target.value)
}

function bedroomsMenu (props) {
  <Menu
    items={[
      {
        key: '1',
        label: 
          <div value='1' onClick={setBedroomsInApp(React.MouseEventHandler, props.setNumBedrooms)}>
            1 bedroom
          </div>
      },
      {
        key: '2',
        label: 
          <div value='2' onClick={setBedroomsInApp(React.MouseEventHandler, props.setNumBedrooms)}>
            2 bedrooms
          </div>
      },
      {
        key: '3',
        label: 
          <div value='3' onClick={setBedroomsInApp(React.MouseEventHandler, props.setNumBedrooms)}>
            3 bedrooms
          </div>
      },
      {
        key: '4',
        label:
          <div value='4' onClick={setBedroomsInApp(React.MouseEventHandler, props.setNumBedrooms)}>
            4 bedrooms
          </div>
      },
      {
        key: '5',
        label: 
          <div value='5' onClick={setBedroomsInApp(React.MouseEventHandler, props.setNumBedrooms)}>
            5 bedrooms
          </div>

      },
      {
        key: '6',
        label:
          <div value='6' onClick={setBedroomsInApp(React.MouseEventHandler, props.setNumBedrooms)}>
            6 or more bedrooms
          </div>
      },
    ]}
  />
  };

function Sidebar(props) {

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
              <Dropdown.Button type="secondary"  overlay={bedroomsMenu(props)} >
                Bedrooms
              </Dropdown.Button>
            </div>

          </CDBSidebarFooter>
        </CDBSidebar>
      </div>
    );
  };
  

export default Sidebar;