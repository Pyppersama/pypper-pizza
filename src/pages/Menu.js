import React from 'react';
import {MenuList} from '../others/MenuList';
import MenuItem from '../components/MenuItem';
import '../styles/Menu.css';

function Menu() {
  return (
    <div className="menu">
        <h1 className="menuTitle">Our Menu</h1>
        <div className="menuList">
          {MenuList.map((menu, key) => {
            return <MenuItem
              key={key} 
              name={menu.name}
              image={menu.image}
              price={menu.price}
            />
          })}
        </div>
    </div>
  )
}

export default Menu;
