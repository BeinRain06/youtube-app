import "./Navbar.css";
import { UpToolsLinks, YoutubeContext } from "../context/YoutubeContext";
import { useRef, useState, useEffect, useContext } from "react";
import axios from "axios";

function Navbar() {
  const {
    newSearchBar,
    scrollDirection,
    handleClickMenu,
    handleSeenSearchBar,
    setListItems,
  } = useContext(YoutubeContext);

  const [inputValue, setInputValue] = useState("");

  const [words, setWords] = useState("");

  const navRef1 = useRef(); // input tag
  const navRef2 = useRef(); // icon clear tag
  const navRef3 = useRef();
  const navRef4 = useRef(); // box  matching searched word mobile

  /*  const handleChange = (e) => {
    setInputValue(e.target.value);
    console.log(e.target.value);
    if (e.target.value !== "") {
      navRef2.current.style.display = "inline-block";
      navRef4.current.classList.add("slide_box_matching");
    } else {
      navRef2.current.style.display = "none";
      navRef4.current.classList.remove("slide_box_matching");
    }
  }; */

  const handleChange = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };

  const triggerAPI = () => {
    const options = {
      method: "GET",
      url: "http://localhost:5000/search",
      params: { words: words },
    };

    axios
      .request(options)
      .then((response) => {
        setListItems(() => response.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleWordsSearch = (e) => {
    e.preventDefault();
    /* console.log(navRef1.current.value); */
    setTimeout(() => {
      setWords(inputValue);
      console.log(inputValue);
      triggerAPI();
    }, 1500);
  };

  const handleClearInput = () => {
    setInputValue("");
    setWords("sprinter");
    triggerAPI();
  };

  /* useEffect(() => {
    const triggerAPI = () => {
      const options = {
        method: "GET",
        url: "http://localhost:5000/search",
        params: { words: words },
      };

      axios
        .request(options)
        .then((response) => {
          setListItems(response.data.items);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    triggerAPI();
  }, [words]); */

  return (
    <div className="nav_container">
      <div className="nav_content" onClick={(event) => console.log(inputValue)}>
        <div className="nav_mobile">
          {!newSearchBar ? (
            <div className="flow_nav_mob_ct1 d-flex flex-column">
              {/*  have to implement position stick here */}
              <div className="nav_mob_ct1">
                <div className="nav_logo d-flex flex-row">
                  <span className="logo ">
                    <i className=" bi bi-youtube"></i>
                  </span>
                  <span className="label_logo">YouTube</span>
                </div>
                <ul className="nav_search">
                  <li className="search_item_wrapper">
                    <i
                      className="bi bi-search"
                      onClick={handleSeenSearchBar}
                    ></i>
                  </li>
                  <li className="three_dots_options">
                    <i className="bi bi-r-circle-fill"></i>
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
                    <div key={index} className="up_item">
                      {element.title}
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <div
              className={
                newSearchBar ? `nav_mob_ct2 input_focus` : `nav_mob_ct2`
              }
            >
              <ul className="new_search_bar">
                <li className="stand_left">
                  <i
                    className="bi bi-arrow-left"
                    onClick={handleSeenSearchBar}
                  ></i>
                </li>
                <li ref={navRef3} className="stand_middle d-flex flex-row">
                  <input
                    type="text"
                    name="newText"
                    className="new_input_value"
                    ref={navRef1}
                    onChange={handleChange}
                  />

                  <div className="button_partition">
                    <i
                      id="clear_tag"
                      ref={navRef2}
                      className="effect_clear bi bi-x-lg"
                    ></i>
                    <i
                      className="effect_search bi bi-search"
                      onClick={handleWordsSearch}
                    ></i>
                  </div>
                </li>
                <li className="stand_right">
                  <i className="bi bi-r-circle-fill"></i>
                </li>
              </ul>
              <div
                ref={navRef4}
                className={
                  inputValue !== ""
                    ? `show_some_matching slide_box_matching`
                    : `show_some_matching`
                }
              >
                <span className="entered_value_key">{inputValue}</span>
              </div>
            </div>
          )}
        </div>

        <div className="nav_desktop">
          <div className="nav_desk_ct">
            <div className="nav_left d-flex flex-row">
              <div className="menu_icon" onClick={handleClickMenu}>
                <i className="bi bi-list"></i>
              </div>
              <div className="nav_logo_desk d-flex flex-center">
                <span className="logo">
                  <i className="bi bi-youtube"></i>
                </span>
                <span className="label_logo">YouTube</span>
              </div>
            </div>
            <div className="area_middle">
              <ul className="in_middle_search  ">
                <li className="input_side">
                  <input
                    type="text"
                    name="text"
                    className="input_value"
                    placeholder="Rechercher"
                  />
                  <i
                    id="clear_tag"
                    ref={navRef2}
                    className="effect_clear bi bi-x-lg"
                    onClick={handleClearInput}
                  ></i>
                </li>
                <li className="button_side">
                  <i
                    className="search_one bi bi-search"
                    onClick={handleWordsSearch}
                  ></i>
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
