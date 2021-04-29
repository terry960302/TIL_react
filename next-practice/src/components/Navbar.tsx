import React, { useState } from "react";
import Link from "next/link";
import { FaAffiliatetheme, FaTimes, FaBars } from "react-icons/fa";

type NavbarProps = {
  title: string;
};

const Navbar = ({ title = "asdads" }: NavbarProps) => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const handleClick = () => setIsOpenMenu(!isOpenMenu);
  const closeDrawer = () => setIsOpenMenu(false);

  return (
    <div className="nav-container">
      <div className="nav-row">
        <Link href="/">
          <FaAffiliatetheme className="nav-logo icon" /> INFLOW
        </Link>

        <div className="nav-menu-icon" onClick={handleClick}>
          {isOpenMenu ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={isOpenMenu ? "nav-menu active" : "nav-menu"}>
          <li className="nav-menu-item" onClick={closeDrawer}>
            <Link href="/">소개</Link>
          </li>
          <li className="nav-menu-item" onClick={closeDrawer}>
            <Link href="/">캐스팅 문의</Link>
          </li>
          <li className="nav-menu-btn-container">
            <Link href="/">
              <button className="nav-menu-btn" onClick={closeDrawer}>
                로그인
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
