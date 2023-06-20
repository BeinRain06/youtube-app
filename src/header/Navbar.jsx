import "./Navbar.css";
import { YoutubeContext } from "../context/YoutubeContext";
import { useContext } from "react";
import e from "express";

function Navbar() {
  const {
    newSearchBar,
    navRef1,
    handleChange,
    handleWordsSearch,
    handleSeenSearchBar,
    handleKeyPress,
  } = useContext(YoutubeContext);

  return (
    <div className="nav_container">
      <div className="nav_content">
        <div className="nav_mobile" onClick={handleSeenSearchBar}>
          {!newSearchBar ? (
            <div className="nav_mob_ct1">
              <div className="nav_logo">
                <span className="logo">
                  <i className="bi bi-youtube"></i>
                </span>
                <span className="label_logo">YouTube</span>
              </div>
              <ul className="nav_search">
                <li className="search_item_wrapper">
                  <i className="search_display bi bi-search"></i>
                </li>
                <li className="three_dots_options">
                  <i className="bi bi-three-dots-vertical"></i>
                </li>
              </ul>
            </div>
          ) : (
            <div className="nav_mob_ct2">
              <div className="new_search_bar">
                <ul className="new_middle_wrapper">
                  <li className="stand_left">
                    <i className="bi bi-arrow-left"></i>
                  </li>
                  <li className="stand_middle" onKeyDown={handleKeyPress}>
                    <input
                      type="text"
                      name="newText"
                      className="new_input_value"
                      ref={navRef1}
                      onChange={handleChange}
                    />
                    <button
                      type="button"
                      className="btn_effect"
                      onClick={handleWordsSearch}
                    >
                      <i className="search_effect bi bi-search"></i>
                    </button>
                  </li>
                  <li className="stand_right">
                    <i class="bi bi-r-circle-fill"></i>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>

        <div className="nav_desktop">
          <div className="nav_left">
            <div className="menu_wrap">
              <div className="menu_inside">
                <i className="bi bi-list"></i>
              </div>
              <div className="nav_logo_desk">
                <span className="logo">
                  <i className="bi bi-youtube"></i>
                </span>
                <span className="label_logo">YouTube</span>
              </div>
              <div className="area_middle">
                <ul className="in_middle_search">
                  <li className="input_side">
                    <input type="text" name="text" className="input_value" />
                  </li>
                  <li className="button_side">
                    <button type="button" className="btn_desktop">
                      <i className="search_one bi bi-search"></i>
                    </button>
                  </li>
                </ul>
              </div>
              <ul className="nav_right">
                <li className="link_video">
                  <i className="bi bi-camera-video"></i>
                </li>
                <li className="link_notifications">
                  <i className="bi bi-bell"></i>
                </li>
                <li className="logo_user">
                  <i className="bi bi-r-circle-fill"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
