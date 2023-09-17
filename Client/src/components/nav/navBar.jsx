import { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './navBar.css';
import { IconContext } from 'react-icons';
import SearchBar from "../SearchBar/SearchBar";
import { FaDice } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';

export default function Navbar({ onSearch }) {
  const [id, setId] = useState("");
  function handleRandomClick() {
    const randomId = Math.floor(Math.random() * 826) + 1;

    onSearch(randomId);

    setId("");
  }
  function changeHandler(event) {
    event.preventDefault();
    setId(event.target.value);
  }
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <div>
          <button className="botonRandom" onClick={handleRandomClick}>
  <FaDice size={24} color="white" />
</button>
      </div>
      <input className="Imput"
        type="search"
        value={id}
        placeholder="Search"
        onChange={changeHandler}
      />
        <SearchBar onSearch={onSearch} />
      <div>
      <button className="boton"
        onClick={() => {
          onSearch(id);
        }}
      >
     <FaPlus size={24} color="white" />
      </button>
      </div>
       <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='/favorites' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        </div>
      </IconContext.Provider>
    </>
  );
}
