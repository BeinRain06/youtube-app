import "./NewArea.css";
import { DataSimulation } from "../TryExData/DataSimulation";
import { YoutubeContext } from "../context/YoutubeContext";
import { useRef, useContext } from "react";
import { Link } from "react-router-dom";
function NewArea({ id }) {
  const { menu1, indexClicked, listItems, handleClickMenu1 } =
    useContext(YoutubeContext);

  const toggleRef1 = useRef(null);

  const first_video = DataSimulation.map((item, index) => item.id === id);
  const others_video = DataSimulation.filter((item, index) => item.id !== id);

  return (
    <div className="new_area_container">
      {/*  mobile form */}
      <div className="new_mob_content">
        <Link to="/">
          <div className="turn_back">
            <i className="bi bi-arrow-left"></i>
          </div>
        </Link>
        <div className="first_video_space">
          <div key={id} id={id} className="box_video">
            <div className="box_crt_video">
              <img
                src={first_video.img}
                alt="oops missing"
                className="video_link"
              ></img>
            </div>
            <div className="box_subtitle">
              <div className="space_brand">
                <i className="logo_brand">{first_video.channelTitle}</i>
              </div>
              <p className="video_infos">
                <span id="clamp-this-module" className="title_video">
                  {first_video.title}
                </span>
                <span className="channel_details">
                  {first_video.channelTitle} {first_video.publishedAt}
                </span>
              </p>
              <div
                id={id}
                className="box_info_more"
                onClick={(e) => handleClickMenu1(e)}
              >
                <i className="bi bi-three-dots-vertical"></i>
                <ul
                  id={id}
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
          </div>
        </div>
        <div className="alternative_video_space">
          <ul className="box_videos_content">
            {others_video.map((item, index) => (
              <li key={item.id} id={item.id} className="box_video">
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
                    <span id="clamp-this-module" className="title_video">
                      {item.title}
                    </span>
                    <span className="channel_details">
                      {item.channelTitle} {item.publishedAt}
                    </span>
                  </p>
                  <div
                    id={item.id}
                    className="box_info_more"
                    onClick={(e) => handleClickMenu1(e)}
                  >
                    <i className="bi bi-three-dots-vertical"></i>
                    <ul
                      id={item.id}
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
          </ul>
          <div className="box_empty_space"></div>
        </div>
      </div>
    </div>
  );
}

export default NewArea;
