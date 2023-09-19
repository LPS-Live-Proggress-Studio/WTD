import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { IoLogInSharp } from 'react-icons/io5';
import { Paths } from '@App/Routing';
import SidebarLinks from './SideBarLinks';
import { SidebarItem } from './SidebarItem';
import './Sidebar.scss';

const Sidebar: FC = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(true);

  const toggleSidebar = () => {
    setIsSidebarVisible((prevIsSidebarVisible) => !prevIsSidebarVisible);
  };

  const isAuthenticated = false;

  const { t } = useTranslation();

  const sidebarLinks = SidebarLinks();

  return (
    <div className={`sidebar ${isSidebarVisible ? 'open' : ''}`}>
      <div className='sidebar__burger' onClick={toggleSidebar}>
        <span className='sidebar__burger-bar'></span>
        <span className='sidebar__burger-bar'></span>
        <span className='sidebar__burger-bar'></span>
      </div>
      {sidebarLinks.map((link, index) => (
        <SidebarItem
          key={index}
          icon={link.icon}
          text={link.text}
          link={link.link}
        />
      ))}
      <hr />
      {!isAuthenticated ? (
        <Link to={Paths.Login}>
          <button className='login_button'>
            {isSidebarVisible ? t('main.buttons.login') : <IoLogInSharp />}
          </button>
        </Link>
      ) : null}
    </div>
  );
};

export default Sidebar;