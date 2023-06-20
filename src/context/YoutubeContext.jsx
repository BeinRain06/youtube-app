import { createContext, useState, useRef } from "react";
import axios from "axios";

export const YoutubeContext = createContext();

function YoutubeContextProvider(props) {
  //variables
  const [inputValue, setInputValue] = useState("");
  const [words, setWords] = useState("");
  const [newSearchBar, setNewSearchbar] = useState(false);
  const [listItems, setListItems] = useState([]);
  const navRef1 = useRef(null);

  //functions

  const handleSeenSearchBar = () => {
    setNewSearchbar((prev) => !prev);
    navRef1?.current.focus();
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
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
        setListItems(response.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleWordsSearch = (e) => {
    e.preventDefault();
    setWords(inputValue);
    triggerAPI();
  };

  const handleKeyPress = (e) => {
    if ((e.target.key = "ENTER")) {
      setWords(navRef1?.current.value);
      triggerAPI();
    }
  };

  /*  const handleClickMenu = () => {}; */

  const { contextValue } = {
    newSearchBar,
    navRef1,
    handleChange,
    handleWordsSearch,
    handleSeenSearchBar,
    handleKeyPress,
  };

  return (
    <YoutubeContext.Provider value={contextValue}>
      {props.children}
    </YoutubeContext.Provider>
  );
}

export default YoutubeContextProvider;
