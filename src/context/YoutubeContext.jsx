import { createContext, useState } from "react";
import axios from "axios";

export const YoutubeContext = createContext();

function YoutubeContextProvider(props) {
  //variables
  const [inputValue, setInputValue] = useState("");
  const [words, setWords] = useState("");
  const [isSearchBar, setSearchbar] = useState(false);
  const [listItems, setListItems] = useState([]);

  //functions

  const setSearchBar = () => {
    setSearchbar((prev) => !prev);
  };
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleWordsSearch = (e) => {
    e.preventDefault();
    setWords(inputValue);

    const options = {
      method: "GET",
      url: "http://localhost:5000",
      params: { words: words },
    };

    axios
      .request(options)
      .then((response) => {
        setListItems(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClickMenu = () => {};

  const { contextValue } = { handleChange, handleWordsSearch };

  return (
    <YoutubeContext.Provider value={contextValue}>
      {props.children}
    </YoutubeContext.Provider>
  );
}

export default YoutubeContextProvider;
