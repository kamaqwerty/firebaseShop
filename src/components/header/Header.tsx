

import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Components } from '..';
import { LIST } from '../../utils/List';

import cls from "./index.module.scss"

const Header: React.FunctionComponent = () => {

  const handleSearch = (e: any) => {
    if(e.key === "Enter") {

    }
  }
  
  return (
    <React.Fragment>
      <Components.Container>
        <header>
          <section className={cls.header_top}>
            <Components.Logo/>

            <div>
              <ul>
                {LIST.HeaderTopIcons.map(item => (
                  <li key={item.id} className={item.id === 3 ? cls.stick : ""}>
                    <NavLink 
                      className={({isActive}) => isActive ? cls.activeLink : ""}
                      to={item.route || ""}
                    >
                      {item.icons && <item.icons/>}
                      {item.caption}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <Components.Avatar/>
            </div>
          </section>
          <section className={cls.header_bottom}>
            <ul>
              {LIST.HeaderBottomElements.map(item => (
                <li key={item.id}>
                  <Link to={""}>
                    {item.caption}
                  </Link>
                </li>
              ))}
            </ul>

            <form onKeyDown={handleSearch}>
              <input 
                type={"search"}
                placeholder="Search..."
              />
            </form>
          </section>
        </header>
      </Components.Container>
    </React.Fragment>
  )
};

export default Header;

