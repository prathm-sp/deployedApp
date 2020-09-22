import React,{useState} from 'react';
import './CSS/Navbar.css';
import {Link} from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {SidebarData} from "./SidebarData";
import { IconContext } from 'react-icons';

function Navbar() {
	const [sidebar, setSidebar] = useState(false);
	{/* Using a Hooks*/}

	const showSidebar = () => setSidebar(!sidebar);

	return(
		<>
		<div className="navbar">
				<Link to="#" className="menu-bars">
					<FaIcons.FaBars onClick={showSidebar}/>
				</Link>
		</div>
		<IconContext.Provider value={{color: 'black'}} > 
			<nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
				<ul className="nav-menu-items" onClick={showSidebar}>
					<li className="navbar-toggle">
						<Link to="#" className="menu-bars">
							<AiIcons.AiOutlineClose />
						</Link>
					</li>
					{SidebarData.map((items, index) => {
						return(
							<li key={index} className={items.cName}>
								<Link to="{item.path}">
									<span>{items.title}</span>
									<div className="icons">
										{items.icon}
									</div>
								</Link>
							</li>
						)
					})}
					<div className="border">
					</div>
				</ul>
			</nav>
			</IconContext.Provider>
		</>
	);
}

export default Navbar;