import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { FaInfoCircle } from 'react-icons/fa';

export const SidebarData = [
  {
    title: 'Home',
    path: '/home',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'About',
    path: '/about',
    icon: <FaInfoCircle />,
    cName: 'nav-text'
  },
  
  {
    title: 'Favorites',
    path: '/favorites',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Random',
    path: '/random',
    icon: <FaIcons.FaRandom />,
    cName: 'nav-text'
  },
  {
    title: 'Logout',
    path: '/',
    icon: <FaIcons.FaSignOutAlt />,
    cName: 'nav-text'
  },
];
