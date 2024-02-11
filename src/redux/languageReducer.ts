import i18n from "i18next";

export interface LanguageState {
    language: "en" | "zh";
    languageList: {
        name: string,
        code: string
    }[];
}

const defaultState: LanguageState = {
    language: "en",
    languageList: [
        { name: "English", code: "en" },
        { name: "Mandarin", code: "zh" },
    ],
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case "change_language":
            // not recommend:
            i18n.changeLanguage(action.payload);

            return {
                ...state,
                language: action.payload
            };
        case "add_language":
            return {
                ...state,
                languageList: [
                    ...state.languageList,
                    action.payload
                ],
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