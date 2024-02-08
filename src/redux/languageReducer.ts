
export interface LanguageState {
    language: "de" | "en";
    languageList: {
        name: string, 
        code: string
    }[];
}

const defaultState: LanguageState = {
    language: "en",
    languageList: [
        { name: "Deutsch", code: "de" },
        { name: "English", code: "en" },
    ], 
};

export default (state = defaultState, action) => {
    switch (action.type) {
      case "change_language":
        return { ...state, language: action.payload };
      case "add_language":
        return {
          ...state,
          languageList: [...state.languageList, action.payload],
        };
      default:
        return state;
    }
  };
  
  // export default (state = defaultState, action) => {
  //     if(action.type === "change_language") {
  //         const newState = {...state, language: action.payload };
  //         return newState;
  //     }
  //     if(action.type === "add_language") {
  //         const newState = {
  //             ...state, 
  //             languageList: [...state.languageList, action.payload]
  //         };
  //         return newState;
  //     }
  //     return state;
  // };