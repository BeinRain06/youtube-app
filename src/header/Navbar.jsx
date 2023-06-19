import "./Navbar.css";
import { YoutubeContext } from "../context/YoutubeContext";
import { useContext } from "react";

function Navbar() {
  const { handleChange, handleWordsSearch, handleSeenSearchBar } =
    useContext(YoutubeContext);

  return (
    <div className="nav_container">
      <div className="nav_content">
        <div className="nav_mobile">
          <div className="nav_logo">
            <span className="logo">
              <i className="bi bi-youtube"></i>
            </span>
            <span className="label_logo">YouTube</span>
          </div>
          <ul className="nav_search">
            <li className="search_item_wrapper" onClick={handleSeenSearchBar}>
              <i className="bi bi-search"></i>
              <div className="new_search_bar">
                <div className="div arrow_exit"></div>
              </div>
            </li>
            <li className="three_dots_options">
              <i className="bi bi-three-dots-vertical"></i>
            </li>
          </ul>
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
                    <button type="button">
                      <i className="bi bi-search"></i>
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
