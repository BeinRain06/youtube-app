import "./Navbar.css";
import { UpToolsLinks, YoutubeContext } from "../context/YoutubeContext";
import { useContext } from "react";
import e from "express";

function Navbar() {
  const {
    newSearchBar,
    navRef1,
    navRef2,
    navRef3,
    inputValue,
    scrollDirection,
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
            <div className="flow_nav_mob_ct1 d-flex flex-column">
              {/*  have to implement position stick here */}
              <div className="nav_mob_ct1">
                <div className="nav_logo d-flex flex-row">
                  <span className="logo mr-1">
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
              <div
                className={
                  scrollDirection !== "down"
                    ? `up_tools_side`
                    : `up_tools_side hide_nav_tools`
                }
              >
                <ul className="  up_tools_links">
                  {UpToolsLinks.map((element, index) => (
                    <div className="up_item">{element.title}</div>
                  ))}{" "}
                </ul>
              </div>
            </div>
          ) : (
            <div className="nav_mob_ct2">
              <ul className="new_search_bar" onKeyDown={handleKeyPress}>
                <li className="stand_left">
                  <i className="bi bi-arrow-left"></i>
                </li>
                <li ref={navRef3} className="stand_middle d-flex flex-row">
                  <input
                    type="text"
                    name="newText"
                    className="new_input_value"
                    ref={navRef1}
                    onChange={handleChange}
                  />
                  <div ref={navRef2} className="button_partition">
                    <button type="button" className="btn_effect_clear">
                      <i className="effect_clear bi bi-x-lg text-secondary"></i>
                    </button>
                    <button
                      type="button"
                      className="btn_effect_search"
                      onClick={handleWordsSearch}
                    >
                      <i className="effect_search bi bi-search text-secondary"></i>
                    </button>
                  </div>
                </li>
                <li className="stand_right">
                  <i class="bi bi-r-circle-fill"></i>
                </li>
              </ul>
              <div className="show_text_wrote">
                <span className="entered_value_key">{inputValue}</span>
              </div>
            </div>
          )}
        </div>

        <div className="nav_desktop">
          <div className="nav_desk_ct">
            <div className="nav_left d-flex flex-row">
              <div className="menu_inside mr-4">
                <i className="bi bi-list"></i>
              </div>
              <div className="nav_logo_desk d-flex flex-center">
                <span className="logo mr-1">
                  <i className="bi bi-youtube"></i>
                </span>
                <span className="label_logo">YouTube</span>
              </div>
            </div>
            <div className="area_middle">
              <ul className="in_middle_search d-flex flex-center">
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
            <ul className="nav_right d-flex flex-center">
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
  );
}

export default Navbar;
