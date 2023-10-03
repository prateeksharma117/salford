import logo from "../../assets/salford_logo.png";
import "./Header.scss";
import { BiMenuAltRight } from "react-icons/bi";
import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { Link, NavLink } from "react-router-dom";
import {useAuth0} from "@auth0/auth0-react"
import {AddPropertyModel, ProfileMenu} from "../../component";
import useAuthCheck from "../../hooks/useAuthCheck";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [modelOpened, setModelOpened] = useState(false)
  const {loginWithRedirect,isAuthenticated,user,logout} =useAuth0()
  const {validateLogin}=useAuthCheck()

  const getMenuStyle = (openMenu) => {
    if (document.documentElement.clientWidth <= 640) {
      return {
        right: openMenu && "block", 
        display: !openMenu&&"none",
    };
    }
  };

  const handleAddPropertyClick=()=>{
    if (validateLogin()) {
      setModelOpened(true)
    }
  }

  return (
    <>
      <section className="h_wrapper">
        <div className="flexCenter paddings innerWidth h_container">
          <Link to="/">
            <img src={logo} alt="logo" width={100} />
          </Link>

          <OutsideClickHandler
            onOutsideClick={() => {
              setOpenMenu(false);
            }}
          >
            <div className="flexCenter h_menu" style={getMenuStyle(openMenu)}>
              <NavLink to={"/properties"} onClick={() => setOpenMenu(false)}>Properties</NavLink>
              <a href="mailto:ps9665748@gmail.com">Contact</a>

              <div onClick={handleAddPropertyClick}>
                Add property
              </div>
              <AddPropertyModel
              opened={modelOpened}
              setModelOpened={setModelOpened}
              />

              {
                !isAuthenticated?(
                <button className="button" onClick={loginWithRedirect}>Login</button>
                ):(
                  <ProfileMenu user={user} logout={logout}/>
                )
              }
            </div>
          </OutsideClickHandler>
          <div
            className="menu_icon"
            onClick={() => setOpenMenu((prev) => !prev)}
          >
            <BiMenuAltRight size={30}/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
