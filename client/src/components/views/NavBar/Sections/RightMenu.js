/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Menu } from 'antd';
import axios from 'axios';
import { USER_SERVER } from '../../../Config';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
const items_new = [
  { label: <Link to='/login'>Signin</Link>, key: 'mail' }, // remember to pass the key prop
  { label: <Link to='/register'>Signup</Link>, key: 'app' }
];

const items_video = [
  { label: <Link to='/video/upload'>Video</Link>, key: 'upload' }, // remember to pass the key prop
  { label: <Link to='/logout'>Logout</Link>, key: 'logout' }
];

const items_normal = [
  { label: <Link to='/logout'>Logout</Link>, key: 'logout' }
];

function RightMenu(props) {
  const user = useSelector(state => state.user)
  const navigate = useNavigate();

  const logoutHandler = () => {
    axios.get(`${USER_SERVER}/logout`).then(response => {
      if (response.status === 200) {
        navigate("/login");
      } else {
        alert('Log Out Failed')
      }
    });
  };

  if (user.userData && !user.userData.isAuth) {
    return (
      // <Menu mode={props.mode} >
      //   <Menu.Item key="mail" >
      //     <a href="/login">Signin</a>
      //   </Menu.Item>
      //   <Menu.Item key="app">
      //     <a href="/register">Signup</a>
      //   </Menu.Item>
      // </Menu>
      <Menu items={items_new} mode={props.mode}/>
    )
  } else {
    return (
      <Menu items={items_video} mode={props.mode}/>
    )
    
    // return (
    //   // <Menu mode={props.mode}>
    //   //   <Menu.Item key="logout">
    //   //     <a onClick={logoutHandler}>Logout</a>
    //   //   </Menu.Item>
    //   // </Menu>
    //   <Menu items={items_normal} mode={props.mode} onClick={logoutHandler}/>
    // )
  }
}

export default RightMenu;