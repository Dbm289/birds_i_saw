import React from "react"


const NavItem = ({item}) => {

    return (
        <li>
             <a className={item.cName} href={item.url}>  
                
            {item.title}
            </a>
        </li>
    )
}

export default NavItem;