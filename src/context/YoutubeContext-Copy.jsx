import { createContext, useReducer } from "react";
import { DataSimulation } from "../TryExData/DataSimulation";

export const YoutubeStateContext = createContext(null);
export const YoutubeDispatchContext = createContext(null);

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

const INITIAL_STATE = {
  newSearchBar: false,
  menu: false,
  menu1: "",
  indexClicked: "",
  words: "sprinter",
  inputValue: "",
  listItems: [],
};

const YoutubeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_NEW_BAR": {
      return { ...state, newSearchBar: !state.newSearchBar };
    }
    case "TOGGLE_MENU": {
      return { ...state, menu: !state.menu };
    }
    case "TOGGLE_MENU1": {
      return {
        ...state,
        menu1:
          action.payload.nextElementSibling.classList.toggle(
            "show_dot_content"
          ),
      };
    }
    case "ADD_INPUT_VALUE": {
      return { ...state, inputValue: action.inputValue };
    }
    case "ADD_SEARCH_WORDS": {
      return { ...state, words: action.words };
    }

    case "ADD_LIST_ITEMS": {
      return { ...state, listItems: state.listItems.fill(action.data) };
    }
    case "ADD_INDEX_CLICKED": {
      return { ...state, indexClicked: action.payload };
    }
    default:
      return state;
  }
};

function YoutubeContextProvider({ children }) {
  const [state, dispatch] = useReducer(YoutubeReducer, INITIAL_STATE);

  return (
    <YoutubeStateContext.Provider value={state}>
      <YoutubeDispatchContext.Provider value={dispatch}>
        {children}
      </YoutubeDispatchContext.Provider>
    </YoutubeStateContext.Provider>
  );
}

export default YoutubeContextProvider;
