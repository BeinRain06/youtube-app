import "./MainArea.css";

import { useRef, useContext } from "react";
import { YoutubeContext } from "../context/YoutubeContext";
import { DataSimulation } from "../TryExData/DataSimulation";

import { Link } from "react-router-dom";

function MainArea() {
  const { indexClicked, dots, menu, menu1, listItems, handleClickMenu1 } =
    useContext(YoutubeContext);

  const mobRef1 = useRef(null);

  const deskRef1 = useRef(null);

  const toggleRef1 = useRef(null);

  const handleEventClicked = (e) => {
    console.log(e.target);
    console.log(dots);
  };

  const handleMobileDots = () => {
    /*  setDotMobs((prev) => !prev); */
    if (mobRef1.current.display !== "inline-block") {
      mobRef1.current.display = "inline-block";
    } else {
      mobRef1.current.display = "none";
    }
  };

  /*  const handleSwitchDotsButton = (e) => {
    const innerWidth = window.innerWidth;
    if (innerWidth <= 989) {
      handleMobileDots();
    } else {
      handleDeskDots(e);
    }
  }; */

  /*  const handleDeskDots = (e) => {
    const spaceLeft = window.innerWidth - e.screenX;
    if (spaceLeft < 120) {
      deskRef1.current.style.left = "-4rem";
      deskRef1.current.style.visibility = "visible";
      deskRef1.current.style.opacity = "1";
      handleMobileDots();
    } else {
      deskRef1.current.style.left = "0";
      deskRef1.current.style.visibility = "visible";
      deskRef1.current.style.opacity = "1";
      handleMobileDots();
    }
  }; */

  /*   const handleDeskDots = (e) => {
    if (deskRef1.current.style.visibility === "hidden") {
      deskRef1.current.style.visibility = "visible";
      deskRef1.current.style.opacity = "1";
      handleMobileDots();
    } else {
      deskRef1.current.style.visibility = "hidden";
      deskRef1.current.style.opacity = "0";
      handleMobileDots();
    }
  }; */

  return (
    <div className="main_area_container">
      <div id="main" className="main_area_content" onClick={handleEventClicked}>
        <div className="menu_city">
          <div className={menu ? `menu_content show_our_menu` : `menu_content`}>
            <div className="home_symbols_menu">
              <div className="box_home_icon box_ic">
                <i className="bi bi-house-check-fill"></i>
              </div>
              <div className="box_short_icon box_ic">
                <i className="bi bi-grid-fill"></i>
              </div>
              <div className="box_subscription_icon box_ic">
                <i className="bi bi-box2-heart"></i>
              </div>
              <div className="box_library_icon box_ic">
                <i className="bi bi-bar-chart-fill"></i>
              </div>
            </div>
            <div className="home_content_menu">
              <div className="first_at_home d-flex flex-center">
                <div className="item_public">
                  <span>
                    <i className="bi bi-house-check-fill"></i>
                  </span>
                  <span>Home</span>
                </div>
                <div className="item_public">
                  <span>
                    <i className="bi bi-cloud-check-fill"></i>
                  </span>
                  <span>Shorts</span>
                </div>
                <div className="item_public">
                  <span>
                    <i className="bi bi-box2-heart"></i>
                  </span>
                  <span>Subscription</span>
                </div>
              </div>
              <div className="second_our_preference d-flex flex-center">
                <div className="item_public">
                  <span>
                    <i className="bi bi-bar-chart-fill"></i>
                  </span>
                  <span>Library</span>
                </div>
                <div className="item_public">
                  <span>
                    <i className="bi bi-box-arrow-in-up-left"></i>
                  </span>
                  <span>Historical</span>
                </div>
                <div className="item_public">
                  <span>
                    <i className="bi bi-caret-right-square"></i>
                  </span>
                  <span>Your Videos</span>
                </div>
                <div className="item_public">
                  <span>
                    <i className="bi bi-arrows-angle-contract"></i>
                  </span>
                  <span>See Later</span>
                </div>
                <div className="item_public">
                  <span>
                    <i className="bi bi-check2"></i>
                  </span>
                  <span>Videos "Like"</span>
                </div>
                <div className="item_public">
                  <span>
                    <i className="bi bi-chevron-down"></i>
                  </span>
                  <span>More</span>
                </div>
              </div>
              <div className="third_ref_subscription d-flex">
                <div className="item_public">
                  <span></span>
                  <span className="third_title">Subscription</span>
                </div>
                <div className="item_public">
                  <span>
                    <i className="bi bi-pie-chart"></i>
                  </span>
                  <span>WION</span>
                </div>
                <div className="item_public">
                  <span>
                    <i className="bi bi-fullscreen"></i>
                  </span>
                  <span>English Speeches</span>
                </div>
                <div className="item_public">
                  <span>
                    <i className="bi bi-cloud-check-fill"></i>
                  </span>
                  <span>BloomBerg</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="box_videos_city">
          {/* <ul className="box_videos_content">
            {listItems.map((item, index) => (
              <li key={index} className="box_video">
                <div className="box_crt_video">
                  <video
                    controls={true}
                    src={item.snippet.thumbnails.medium.url}
                    className="video_link"
                  ></video>
                </div>
                <div className="box_subtitle">
                  <div className="space_brand">
                    <i className="logo_brand">{item.snippet.channelTitle}</i>
                  </div>
                  <p className="video_infos">
                    <span id="clamp-this-module" className="title_video">
                      {item.snippet.title}
                    </span>
                    <span className="channel_details">
                      {item.snippet.channelTitle} {item.snippet.publishedAt}
                    </span>
                  </p>
                  <div className="box_info_more" onClick={(e) => handleClickMenu1(e)>
                    <i className="bi bi-three-dots-vertical"></i>
                    <ul
                      id={index}
                      ref={toggleRef1}
                      className={
                        menu1 && toggleRef1.current.id === indexClicked
                          ? `desk_dot_content show_dot_content`
                          : `desk_dot_content`
                      }
                    >
                      <li>Not Interest</li>
                      <li>Don't recommend this video</li>
                      <li>See Later</li>
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ul> */}

          <ul className="box_videos_content">
            {DataSimulation.map((item, index) => (
              <li key={index} id={index} className="box_video">
                {/* <Link to="/videos" id={index}>
                  <div className="box_crt_video">
                    <img
                      src={item.img}
                      alt="oops missing"
                      className="video_link"
                    ></img>
                  </div>
                </Link> */}
                <div className="box_crt_video">
                  <img
                    src={item.img}
                    alt="oops missing"
                    className="video_link"
                  ></img>
                </div>

                <div className="box_subtitle">
                  <div className="space_brand">
                    <i className="logo_brand">{item.channelTitle}</i>
                  </div>
                  <p className="video_infos">
                    {/*   <Link to="/videos" id={index}>
                      <span id="clamp-this-module" className="title_video">
                        {item.title}
                      </span>
                    </Link> */}
                    <span id="clamp-this-module" className="title_video">
                      {item.title}
                    </span>
                    <span className="channel_details">
                      {item.channelTitle} {item.publishedAt}
                    </span>
                  </p>
                  <div className="box_info_more">
                    <i
                      id={index}
                      className="bi bi-three-dots-vertical"
                      onClick={(e) => handleClickMenu1(e)}
                    ></i>
                    {/*  <ul
                      id={index}
                      ref={toggleRef1}
                      className={
                        menu1
                          ? `desk_dot_content show_dot_content`
                          : `desk_dot_content`
                      }
                    >
                      <li>Not Interest</li>
                      <li>Don't recommend this video</li>
                      <li>See Later</li>
                    </ul> */}

                    <ul
                      id={index}
                      ref={toggleRef1}
                      className="desk_dot_content"
                    >
                      <li>Not Interest</li>
                      <li>Don't recommend this video</li>
                      <li>See Later</li>
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="box_empty_space"></div>
        </div>
        <div className="box_empty_space"></div>
        <div
          ref={mobRef1}
          className={
            menu ? `shadow_main_area apply_by_menu` : `shadow_main_area`
          }
        ></div>
      </div>
    </div>
  );
}

export default MainArea;
