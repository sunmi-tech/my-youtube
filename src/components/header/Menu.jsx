import { Link, useLocation } from "react-router-dom";
import {headerMenus, searchKeyword} from "../../Data/header";

function Menu (){
    const location = useLocation();

    return (
        <nav className="header_menu">
        <ul className="menu">
          {
            headerMenus.map((menu, i)=>{
              return (
                <li key={i} className={location.pathname === menu.src ? 'active' : ''}>
                <Link to={menu.src}>
                  {menu.icon}{menu.title}
                </Link>
                </li>
              )
            })
          }
        </ul>

        <ul className="keyword">
          {
            searchKeyword.map((keyword,i)=>{
              return (
                <li key={i} className={location.pathname === keyword.src ? 'active' : ''}>
                <Link to={keyword.src}>{keyword.title}</Link>
                </li>
              )
            })
          }
        </ul>
      </nav>
    )
}

export default Menu