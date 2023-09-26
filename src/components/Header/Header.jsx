import { useState } from "react";
import SearchIcon from "../ui/SearchIcon";
import Form from "./Form";
import s from "./Header.module.scss";
import MaiNav from "./MainNav";
import ImageComponent from "../ui/ImageComponent";

const Header = props => {
  const [formActive, setFormActive] = useState(false);
  const [mobileActive, setMobileActive] = useState(false);
  const handleFormActive = () => {
    setFormActive(prev => !prev);
    setMobileActive(false);
  }
  const handleMobileActive = () => {
    setMobileActive(prev => !prev);
    setFormActive(false);
  }
  return (
    <header className={s.header}>
      <MaiNav isMobileActive={mobileActive} />
      <a className={s.header__logo} href="./">
        <ImageComponent
          src="/logo.webp"
          alt="Bucked Up"
          width="179"
          height="47"
        />
      </a>
      <nav>
        <ul>
          <li className={s.desktopOnly}><a href="#">KEEP IN TOUCH</a></li>
          <li className={s.desktopOnly}><a href="#">SHOP</a></li>
          <li>
            <button type="button" className={s.toggleSearch} onClick={handleFormActive}>
              <SearchIcon />
            </button>
          </li>
        </ul>
      </nav>
      <Form isActive={formActive} />
      <button onClick={handleMobileActive} className={`${s.header__mobileButton} ${mobileActive && s.active}`} type="button"><span></span><span></span><span></span></button>
    </header>
  )
}

export default Header