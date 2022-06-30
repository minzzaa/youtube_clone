import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const items = [
  { label: <Link to='/'>Home</Link>, key: 'mail' }, // remember to pass the key prop
  {
    label: <span>Blogs</span>,
    key: 'submenu',
    children: [{ type:'group',
                  label: 'item 1', 
                  key: 'submenu-item-1', 
                  children: [{ label: 'Option 1',
                                key: "setting:1" }, 
                              { label: 'Option 2',
                                key: "setting:2" },]
              }, 
              { type:'group',
                  label: 'item 2', 
                  key: 'submenu-item-2', 
                  children: [{ label: 'Option 3',
                                key: "setting:3" }, 
                              { label: 'Option 4',
                                key: "setting:4" },]
              },
            ],
  },
];
function LeftMenu(props) {
  
  return (
  //   <Menu mode={props.mode}>
  //   <Menu.Item key="mail">
  //     <a href="/">Home</a>
  //   </Menu.Item>
  //   <SubMenu title={<span>Blogs</span>}>
  //     <MenuItemGroup title="Item 1">
  //       <Menu.Item key="setting:1">Option 1</Menu.Item>
  //       <Menu.Item key="setting:2">Option 2</Menu.Item>
  //     </MenuItemGroup>
  //     <MenuItemGroup title="Item 2">
  //       <Menu.Item key="setting:3">Option 3</Menu.Item>
  //       <Menu.Item key="setting:4">Option 4</Menu.Item>
  //     </MenuItemGroup>
  //   </SubMenu>
  // </Menu>
    <Menu items={items} mode={props.mode}/>
  )
}

export default LeftMenu