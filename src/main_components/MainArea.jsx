import "./MainArea.css";

import { useContext } from "react";
import { YoutubeContext } from "../context/YoutubeContext";

function MainArea() {
  const { menu, dotsMob, listItems } = useContext(YoutubeContext);
  return (
    <div className="main_area_container">
      <div
        className={
          menu ? `main_area_content shadow_main_area` : `main_area_content`
        }
      >
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
                <span className="title_sub py-2 text-align-left">
                  Subscription
                </span>
                <div className="third_content_sub d-flex flex-center">
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
        </div>
        <div
          className={
            dotsMob ? `box_videos_city shadow_city` : `box_videos_city`
          }
        >
          <ul className="box_videos_content">
            {listItems.map((item, index) => (
              <li key={index} className="box_video">
                <div className="box_crt_video">
                  <video
                    controls="true"
                    src={item.snippet.thumbnails.medium.url}
                    className="video_link"
                  ></video>
                </div>
                <div className="box_subtitle">
                  <div className="box_info_video">
                    <p className="logo_creator">
                      {item.snippet.thumbnails.channelTitle}
                    </p>
                    <div className="info_video_content">
                      <p className="title_video">{item.snippet.title} </p>
                      <p className="video_number_views">
                        <span>{item.snippet.thumbnails.channelTitle}</span>
                        <span>{item.snippet.publishedAt}</span>
                      </p>
                    </div>
                  </div>
                  <div className="box_info_more">
                    <i className="bi bi-three-dots"></i>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <ul className="dots_mob_content">
            <li>Not Interest</li>
            <li>Don't recommend this video</li>
            <li>See Later</li>
          </ul>
        </div>
        <div className="box_videos_city_desk"></div>
      </div>
    </div>
  );
}

export default MainArea;
