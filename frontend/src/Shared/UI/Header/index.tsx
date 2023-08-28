import { useEffect, useRef, KeyboardEvent } from "react";
import { Link } from "react-router-dom";
import { Keyboard } from "@Shared/variables";
import burger from "@Icons/Burger.svg";
import home from "@Icons/Home.svg";
import notifications from "@Icons/notification_bel.svg";
import "./header.scss";

interface HeaderProps {
  onBurgerMenuClick: () => void;
  onSearchShortcut: () => void;
}

const Header: React.FC<HeaderProps> = ({ onBurgerMenuClick, onSearchShortcut }) => {
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        (event.ctrlKey || event.metaKey) &&
        (event.key === "f" || event.key === "а")
      ) {
        event.preventDefault();
        onSearchShortcut();
        if (searchInputRef.current) {
          searchInputRef.current.focus();
        }
      } else if (event.key === "Escape") {
        // Разфокусировка поля ввода при нажатии Escape
        if (searchInputRef.current) {
          searchInputRef.current.blur();
        }
      }
    };
    //@ts-ignore
    document.addEventListener("keydown", handleKeyDown);
    
    return () => {
      //@ts-ignore
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onSearchShortcut]);

  return (
    <header className="header">
      <div className="header__container">
        <nav className="nav-menu">
          <div className="nav-menu__left">
            <div className="menu-left__burger-menu" onClick={onBurgerMenuClick}>
              <img src={burger} alt="menu-burger" />
              <span className="tooltip">{Keyboard.MENU}</span>
            </div>
            <div className="menu-left__home">
              <Link to="/">
                <img src={home} alt="home button" />
              </Link>
            </div>
            <div className="menu-left__search">
              <div className="menu-left__search__wrapper">
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Найти..."
                />
                <div className="kb">{Keyboard.SEARCH}</div>
              </div>
            </div>
          </div>
          <div className="nav-menu__right">
            <div className="avatar">
              <img src={notifications} alt="user's avatar" />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
