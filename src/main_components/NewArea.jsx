import "./NewArea.css";
import { DataSimulation } from "../TryExData/DataSimulation";
import { YoutubeContext } from "../context/YoutubeContext";
import { useRef, useContext } from "react";
import { Link } from "react-router-dom";
function NewArea({ id }) {
  const { menu1, listItems, indexClicked, handleClickMenu1 } =
    useContext(YoutubeContext);

  // add id to listItems
  const newListItems = listItems.map((item, index) => ({
    ...item,
    newId: index,
  }));

  const first_video = newListItems.map(
    (item, index) => item.newId === indexClicked
  );
  const others_video = newListItems.filter(
    (item, index) => item.newId !== indexClicked
  );

  return (
    <div
      className="new_area_container"
      onClick={(e) => console.log(e.target.nextElementSibling)}
    >
      {/*  mobile form */}
      <div className="new_mob_content">
        <Link to="/">
          <div className="turn_back">
            <i className="bi bi-arrow-left"></i>
          </div>
        </Link>
        <div className="first_video_space">
          <div key={id} id={id} className="box_first_video">
            <div className="box_crt_first_video">
              <img
                src={first_video.img}
                alt="oops missing"
                className="video_first_link"
              ></img>
            </div>
            <div className="box_new_subtitle">
              <div className="space_new_brand">
                <i className="logo_new_brand">{first_video.channelTitle}</i>
              </div>
              <p className="video_new_infos">
                <span className="title_new_video">{first_video.title}</span>
                <span className="channel_new_details">
                  {first_video.channelTitle} {first_video.publishedAt}
                </span>
              </p>
              <div id={id} className="box_info_new_more">
                <i className="bi bi-three-dots-vertical"></i>
                <ul
                  id={id}
                  className="desk_dot_new_content"
                  onClick={(e) => handleClickMenu1(e)}
                >
                  <li>Not Interest</li>
                  <li>Don't recommend this video</li>
                  <li>See Later</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="alternative_video_space">
          <ul className="box_videos_new_content">
            {others_video.map((item, index) => (
              <li key={item.id} id={item.id} className="box_new_video">
                <div className="box_crt_new_video">
                  <img
                    src={item.img}
                    alt="oops missing"
                    className="video_new_link"
                  ></img>
                </div>
                <div className="box_new_subtitle">
                  <div className="space_new_brand">
                    <i className="logo_new_brand">{item.channelTitle}</i>
                  </div>
                  <p className="video_new_infos">
                    <span className="title_new_video">{item.title}</span>
                    <span className="channel_new_details">
                      {item.channelTitle} {item.publishedAt}
                    </span>
                  </p>
                  <div id={item.id} className="box_info_new_more">
                    <i
                      className="bi bi-three-dots-vertical"
                      onClick={(e) => handleClickMenu1(e)}
                    ></i>
                    <ul id={item.id} className="desk_dot_new_content">
                      <li>Not Interest</li>
                      <li>Don't recommend this video</li>
                      <li>See Later</li>
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="box_empty_new_space"></div>
        </div>
      </div>
    </div>
  );
}

export default NewArea;
