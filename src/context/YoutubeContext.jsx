import { createContext, useState, useRef, useEffect } from "react";
import axios from "axios";

export const YoutubeContext = createContext();

export const UpToolsLinks = [
  { title: "Explore", icon: undefined },
  { title: "All", icon: undefined },
  { title: "Mix", icon: undefined },
  { title: "Thoughts", icon: undefined },
  { title: "Programming", icon: undefined },
  { title: "Podcast", icon: undefined },
  { title: "Music", icon: undefined },
  { title: "Sells", icon: undefined },
  { title: "Trading", icon: undefined },
  { title: "Read", icon: undefined },
  { title: "Online", icon: undefined },
  { title: "Newly", icon: undefined },
];

function YoutubeContextProvider(props) {
  //variables
  const [inputValue, setInputValue] = useState("");
  const [words, setWords] = useState("");
  const [newSearchBar, setNewSearchbar] = useState(false);
  const [listItems, setListItems] = useState([]);
  const [scrollDirection, setScrollDirection] = useState(null);
  const navRef1 = useRef(null);
  const navRef2 = useRef(null);
  const navRef3 = useRef(null);

  // hide or show Navbar Mobile onScroll
  useEffect(() => {
    const updateScrollDirection = () => {
      let lastScrollY = window.scrollY;
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 25 || scrollY - lastScrollY < 25)
      ) {
        setScrollDirection(scrollDirection);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add Event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // remove Event listener
    };
  }, [scrollDirection]);

  // inner functions
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
    } else {
      if (navRef1?.current.value !== "") {
        navRef2?.current.classList.add("show_close_button");
        navRef3?.current.classList.add("extend_width");
      } else {
        navRef2?.current.classList.remove("show_close_button");
        navRef3?.current.classList.remove("extend_width");
      }
    }
  };

  /*  const handleClickMenu = () => {}; */

  const { contextValue } = {
    newSearchBar,
    navRef1,
    navRef2,
    navRef3,
    newKeyPress,
    inputValue,
    scrollDirection,
    listItems,
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
