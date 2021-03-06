import React, { Component} from 'react';
import {Route, Link} from 'react-router-dom';


const menus = [
    {
        name: 'MENU',
        to: '/',
        exact: true
    },
    {
        name: 'QUẢN LÝ SẢN PHẨM',
        to: '/product-list',
        exact: false
    }
]

const MenuLink = ({label, to, activeOnlyWhenExact}) => {
    return (
        <Route 
            path = {to}
            exact={activeOnlyWhenExact}
            children={({match}) => {
                var active = match ? 'active' : '';
                return (
                    <li className={active}>
                        <Link to={to}>
                            {label}
                        </Link>
                    </li>
                );
            }}
        />
    )
}

class Menu extends Component {
  render() {
    return (
      <div>
        <div className="navbar navbar-inverse">
          <a className="navbar-brand" href="#"></a>
          <ul className="nav navbar-nav">
            {this.showMenus(menus)}
          </ul>
        </div>
      </div>
    );
  }

    showMenus = (menus) => {
        var result = null;
        if(menus.length > 0){
            result = menus.map((menu, index) => {
                return (
                    <MenuLink 
                        key={index}
                        label={menu.name}
                        to={menu.to}
                        activeOnlyWhenExact={menu.exact}
                    />
                )
             });
        }
      return result;
    }
}

export default Menu;
