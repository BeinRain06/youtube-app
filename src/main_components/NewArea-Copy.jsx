import "./NewArea.css";
/* import { DataSimulation } from "../TryExData/DataSimulation"; */
import {
  YoutubeStateContext,
  YoutubeDispatchContext,
} from "../context/YoutubeContext-Copy";
import { useContext } from "react";
import { Link } from "react-router-dom";

function NewArea() {
  /* const { menu1, listItems, indexClicked, handleClickMenu1 } =
    useContext(YoutubeContext); */

  const state = useContext(YoutubeStateContext);

  const dispatch = useContext(YoutubeDispatchContext);

  const handleClickMenu1 = (e) => {
    dispatch({ type: "TOGGLE_MENU1", menu1: e.target });
  };

  const first_video = state.listItems.map(
    (item, index) => item.newId === state.indexClicked
  );
  const others_video = state.listItems.filter(
    (item, index) => item.newId !== state.indexClicked
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
          <div
            key={state.indexClicked}
            id={state.indexClicked}
            className="box_first_video"
          >
            <div className="box_crt_first_video">
              <video
                controls={true}
                src={first_video.snippet.thumbnails.medium.url}
                className="video_first_link"
              ></video>
            </div>
            <div className="box_new_subtitle">
              <div className="space_new_brand">
                <i className="logo_new_brand">
                  {first_video.snippet.channelTitle}
                </i>
              </div>
              <p className="video_new_infos">
                <span className="title_new_video">
                  {first_video.snippet.title}
                </span>
                <span className="channel_new_details">
                  {first_video.snippet.channelTitle}
                  {first_video.snippet.publishedAt}
                </span>
              </p>
              <div id={first_video.newId} className="box_info_new_more">
                <i className="bi bi-three-dots-vertical"></i>
                <ul
                  id={first_video.newId}
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
              <li key={item.newId} id={item.newId} className="box_new_video">
                <div className="box_crt_new_video">
                  <video
                    controls={true}
                    src={item.snippet.thumbnails.medium.url}
                    className="video_new_link"
                  ></video>
                </div>
                <div className="box_new_subtitle">
                  <div className="space_new_brand">
                    <i className="logo_new_brand">
                      {item.snippet.channelTitle}
                    </i>
                  </div>
                  <p className="video_new_infos">
                    <span className="title_new_video">
                      {item.snippet.title}
                    </span>
                    <span className="channel_new_details">
                      {item.snippet.channelTitle} {item.snippet.publishedAt}
                    </span>
                  </p>
                  <div id={item.newId} className="box_info_new_more">
                    <i
                      className="bi bi-three-dots-vertical"
                      onClick={(e) => handleClickMenu1(e)}
                    ></i>
                    <ul id={item.newId} className="desk_dot_new_content">
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
