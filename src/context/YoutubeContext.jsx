import { createContext, useState, useEffect } from "react";
import { DataSimulation } from "../TryExData/DataSimulation";

export const YoutubeContext = createContext(null);

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
  /* const [inputValue, setInputValue] = useState(""); */
  /*  const [words, setWords] = useState(""); */
  const [newSearchBar, setNewSearchbar] = useState(false);
  const [menu, setMenu] = useState(false);
  const [menu1, setMenu1] = useState(false);
  const [indexClicked, setIndex] = useState("");
  const [listItems, setListItems] = useState([]);
  const [scrollDirection, setScrollDirection] = useState(null);

  // hide or show Navbar Mobile onScroll

  /*  useEffect(() => {
    const verticalDotsMobile = () => {
      setDots((prev) => !prev);
    };

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
    window.addEventListener("click", verticalDotsMobile);
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // remove Event listener
      window.removeEventListener("mousedown", verticalDotsMobile);
    };
  }, [scrollDirection, dots]); */

  const handleSeenSearchBar = () => {
    setNewSearchbar((prev) => !prev);
    /* navRef1?.current.focus(); */
  };

  const handleClickMenu = () => {
    setMenu((prev) => !prev);
  };

  const handleClickMenu1 = (e) => {
    setMenu1((prev) => !prev);
    e.target.nextElementSibling.classList.toggle("show_dot_content");
  };

  const handleIndexClicked = (id) => {
    setIndex(id);
  };

  const contextValue = {
    scrollDirection,
    listItems,
    menu,
    menu1,
    newSearchBar,
    indexClicked,
    handleSeenSearchBar,
    handleClickMenu,
    handleClickMenu1,
    handleIndexClicked,
  };

  return (
    <YoutubeContext.Provider value={contextValue}>
      {props.children}
    </YoutubeContext.Provider>
  );
}

export default YoutubeContextProvider;
